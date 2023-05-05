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
  },

  async getAcademies() {
    return await httpService.get('/academies');
  },

  async getLectors() {
    return await httpService.get('/lectors')
  }

}

export default generalService
