class User {
  firstName;
  lastName;
  middleName;

  constructor(data = {}) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.middleName = data.middleName;
  }
}

/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
  it('first name defaults to empty', () => {
    // arrange
    const data = { firstName: null };

    // act
    const model = new User(data);

    // assert
    expect(model.firstName).toBe('');
  });
});
