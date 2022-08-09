class User {
  firstName;
  lastName;
  middleName;

  constructor(data, userService) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.middleName = data.middleName || '';
    this.id = data.id;
    this.userService = userService;
  }

  get fullName() {
    if (this.middleName.length > 0) {
      return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
    }

    return `${this.firstName} ${this.lastName}`;
  }

  async getMyFullUserData() {
    return this.userService.getUserById(this.id);
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

class UserService {
  getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
  let model;
  let mockUserService;

  describe('getMyFullUserData', () => {
    beforeEach(() => {
      mockUserService = {
        lastId: null,
        user: {},
        getUserById(id) {
          this.lastId = id;

          return this.user;
        },
      };

      const data = {
        firstName: 'Dylan',
        middleName: 'Christopher',
        lastName: 'Israel',
        id: 1,
      };

      model = new User(data, mockUserService);
    });

    it('passes id to get user', async () => {
      // arrange
      mockUserService.lastId = null;

      // act
      await model.getMyFullUserData();

      // assert
      expect(mockUserService.lastId).toBe(1);
    });

    it('gets full user data', async () => {
      // arrange
      mockUserService.user = new User({
        firstName: 'Dollan',
        middleName: 'Coding God',
        lastName: 'Nonya',
        id: 2,
      });

      // act
      const result = await model.getMyFullUserData();

      // assert
      expect(result.id).toBe(2);
      expect(result.firstName).toBe('Dollan');
    });
  });
});
