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

  get fullNamePieces() {
    return [this.firstName, this.middleName, this.lastName];
  }
}

/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
  it('exists', () => {
    // assert
    expect(User).toBeDefined();
  });

  let model;

  beforeEach(() => {
    model = new User();
  });

  describe('additional matchers area', () => {
    it('has my first name', () => {
      // arrange
      const firstName = 'Dylan';
      const lastName = 'Israel';

      // act
      model = new User({ firstName, lastName });

      // assert
      expect(model.fullName).toMatch(/Dylan/);
    });
  });
});
