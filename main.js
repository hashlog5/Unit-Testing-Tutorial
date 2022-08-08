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
}

/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
  let model;

  describe('say my name', () => {
    beforeEach(() => {
      model = new User();
    });

    it('alerts the full name of user', () => {
      // arrange
      model.firstName = 'Dylan';
      model.lastName = 'Israel';
      spyOn(window, 'alert');

      // act
      model.sayMyName();

      // assert
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith('Dylan Israel');
    });
  });
});
