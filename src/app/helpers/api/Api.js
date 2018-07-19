import a from 'axios';
import config from 'config/api.json';

const axios = a.create({
  baseURL: config.baseUrl,
  headers: { 'Access-Control-Allow-Origin': config.baseUrl },
  withCredentials: true,
});

class Api {
  static async get(url, params) {
    return axios.get(url, { params });
  }

  static async post(url, params) {
    return axios.post(url, { params });
  }
}

export default Api;
