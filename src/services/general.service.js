import httpService from './httpClient.service';

const generalService = {

  async getRoles() {
    return await httpService.get('/roles',);
  },
  
  async getCategories() {
    return await httpService.get('/categories',);
  },

  async getFormats() {
    return await httpService.get('/formats');
  }
}

export default generalService
