import httpService from './httpClient.service';

const coursesService = {

  async getCourses() {
    return await httpService.get('/courses',);
  },

  async createCourse(courseObj) {
    return await httpService.post('/courses', courseObj);
  },

  async updateCourse(courseObj) {
    return await httpService.put('/courses', courseObj)
  },

  async deleteCourse(courseID) {
    return await httpService.delete(`/courses/${courseID}`);
  }
}

export default coursesService
