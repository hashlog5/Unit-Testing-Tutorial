class User {
  firstName;
  lastName;
  middleName;

  constructor(data = {}) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.middleName = data.middleName || '';
  }
}

/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
  let model;
  beforeEach(() => {
    model = new User();
    console.log('dylan');
  });

  describe('default values', () => {
    it('first name defaults to empty', () => {
      // assert
      console.log(1);
      expect(model.firstName).toBe('');
    });

    it('last name defaults to empty', () => {
      // assert
      console.log(2);
      expect(model.lastName).toBe('');
    });

    it('middle name defaults to empty', () => {
      // assert
      console.log(3);
      expect(model.middleName).toBe('');
    });
  });
});
