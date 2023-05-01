import httpService from './httpClient.service';

const academiesService = {

  async getAcademies() {
    return await httpService.get('/academies');
  },

  async createAcademy(academyObj) {
    return await httpService.post('/academies', academyObj);
  },

  async updateAcademy(academyObj) {
    return await httpService.put('/academies', academyObj)
  },

  async deleteAcademy(academyID) {
    return await httpService.delete(`/academies/${academyID}`);
  }
}

export default academiesService;
