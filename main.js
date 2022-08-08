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
}

/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
  let model;

  describe('default values', () => {
    beforeEach(() => {
      model = new User();
    });

    it('first name defaults to empty', () => {
      // assert
      expect(model.firstName).toBe('');
    });

    it('last name defaults to empty', () => {
      // assert
      expect(model.lastName).toBe('');
    });

    it('middle name defaults to empty', () => {
      // assert
      expect(model.middleName).toBe('');
    });
  });

  describe('full name', () => {
    beforeEach(() => {
      model = new User({ firstName: 'Dylan', lastName: 'Israel' });
    });

    it('middle initial when middleName is defined with first and last', () => {
      // arrange
      model.middleName = 'Christopher';

      // act
      const result = model.fullName;

      // assert
      expect(result).toBe(
        `${model.firstName} ${model.middleName[0]}. ${model.lastName}`
      );
    });

    it('when no middle name just return first and last', () => {
      // arrange
      model.middleName = '';

      // act
      const result = model.fullName;

      // assert
      expect(result).toBe(`${model.firstName} ${model.lastName}`);
    });
  });
});
