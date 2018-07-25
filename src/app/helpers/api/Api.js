import a from 'axios';
import logger from 'helpers/logger';
import baseURL from './baseURL';

logger.log(`baseURL is set to: ${baseURL}`);

const axios = a.create({
  baseURL,
  headers: { 'Access-Control-Allow-Origin': baseURL },
  withCredentials: true,
});

class Api {
  static async get(url, params) {
    logger.log('GET', url, params);
    return axios.get(url, { params });
  }

  static async post(url, data) {
    logger.log('POST', url, data);
    return axios.post(url, { ...data });
  }
}

export default Api;
