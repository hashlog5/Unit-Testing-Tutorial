class User {
  firstName;
  lastName;
  middleName;

  constructor(data = {}) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.middleName = data.middleName || '';
  }

  get fullName() {
    if (this.middleName.length > 0) {
      return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
    }

    return `${this.firstName} ${this.lastName}`;
  }

  sayMyName() {
    window.alert(this.fullName);
  }

  getCodeName() {
    const isATestingGod = confirm('Are you a testing god?');

    if (isATestingGod) {
      return 'TESTING GOD!';
    } else {
      return `scrub skipping tests in his best friend's ride!`;
    }
  }
}

/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
  let model;

  describe('get code name', () => {
    beforeEach(() => {
      model = new User();
    });

    it('is a testing god when confirmed', () => {
      // arrange
      spyOn(window, 'confirm').and.returnValue(true);

      // act
      const result = model.getCodeName();

      // asssert
      expect(result).toBe('TESTING GOD!');
    });

    it('is a scrub when not doing testing', () => {
      // arrange
      spyOn(window, 'confirm').and.returnValue(false);

      // act
      const result = model.getCodeName();

      // asssert
      expect(result).toBe(`scrub skipping tests in his best friend's ride!`);
    });

    it('ask a user if they are a testing god', () => {
      // arrange
      spyOn(window, 'confirm').and.returnValue(true);

      // act
      const result = model.getCodeName();

      // asssert
      expect(window.confirm).toHaveBeenCalledWith(`Are you a testing god?`);
    });
  });
});
