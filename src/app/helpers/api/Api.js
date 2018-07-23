import a from 'axios';
import config from 'config/api.json';
import logger from 'helpers/logger';

const axios = a.create({
  baseURL: config.baseUrl,
  headers: { 'Access-Control-Allow-Origin': config.baseUrl },
  withCredentials: true,
});

class Api {
  static async get(url, params) {
    return axios.get(url, { params });
  }

  static async post(url, data) {
    logger.log('POST', url, data);
    return axios.post(url, { ...data });
  }
}

export default Api;
