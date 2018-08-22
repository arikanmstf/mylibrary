// @flow
import a from 'axios';
import logger from 'helpers/logger';
import getConfig from 'config/get';

const { baseURL } = getConfig();
logger.log(`baseURL is set to: ${baseURL}`);

const axios = a.create({
  baseURL,
  headers: { 'Access-Control-Allow-Origin': baseURL },
  withCredentials: true,
});

type AxiosResult = {
  data?: {
    success?: Object,
    error?: string,
  },
  status: number,
  statusText: string,
}

class Api {
  static async get(url: string, params: Object, ...other: *) {
    logger.log('GET', url, params);
    try {
      const response = await axios.get(url, { params }, ...other);
      return Api.fetch(response);
    } catch (e) {
      const error = Api.fetch(e.response);
      logger.log(error); // TODO: dispatch common error
      return null;
    }
  }

  static async post(url: string, data: Object, ...other: *) {
    logger.log('POST', url, data);
    try {
      const response = await axios.post(url, { ...data }, ...other);
      return Api.fetch(response);
    } catch (e) {
      const error = Api.fetch(e.response);
      logger.log(error); // TODO: dispatch common error
      return null;
    }
  }

  static fetch(response: AxiosResult) {
    return response && response.status === 200 ? (response.data && response.data.success)
      : ((response && response.data && response.data.error) || null);
  }
}

export default Api;