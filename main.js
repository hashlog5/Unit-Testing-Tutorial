class User{
  firstName;
  lastName;
  middleName;

  constructor(data = {}){
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.middleName = data.middleName 
    
  }
}

/**
 * Test Suite
 */
describe('User', ()=>{
  
})