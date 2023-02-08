import axios from 'axios';


const h_axios = axios.create({
  baseURL: 'http://165.22.86.77/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

h_axios.interceptors.request.use(function (config) {
  const access_token = localStorage.getItem('access_token');
  const uid = localStorage.getItem('uid');

  if (access_token && uid) {
    config.headers.Authorization = access_token;
    config.headers.uid = uid;
  }

  return config;
});

h_axios.interceptors.response.use(function (response) {
  if (response.data.code === 'user/signed_in') {
    const access_token = response.data.tokenData.token;
    const uid = response.data.tokenData.uid;

    localStorage.setItem('access_token', access_token);
    localStorage.setItem('uid', uid);
  }

  return response;
}, (error) => {
  return error.response
})

const httpService = {
  get: async (url, config) => await h_axios.get(url, config),
  post: async (url, data, config) => await h_axios.post(url, data, config),
  put: async (url, data, config) => await h_axios.put(url, data, config),
  delete: async (url, config) => await h_axios.delete(url, config)
};

export default httpService;