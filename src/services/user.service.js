import httpService from './httpClient.service'

const userService = {

  async loginUser(userObj) {
    return await httpService.post('/users/signin', userObj);
  },
  
  async registerUser(userObj) {
    return await httpService.post('/users/signup', userObj);
  },

  async getUser() {
    return await httpService.get('/users/');
  }
}

export default userService
