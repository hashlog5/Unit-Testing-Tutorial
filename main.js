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

  describe('additional matchers examples', () => {
    it('gets full name pieces', () => {
      // arrange
      const firstName = 'Dylan';
      const middleName = 'Christopher';
      const lastName = 'Israel';

      // act
      model = new User({ firstName, middleName, lastName });

      // assert
      expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);
    });
  });
});
