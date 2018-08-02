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
    if (typeof IS_MOCK !== 'undefined' && IS_MOCK) {
      logger.log('GET-MOCKED', url, data);
      // eslint-disable-next-line
      return require(`mock/${url}/get.json`);
    }

    try {
      logger.log('GET', url, params);
      const response = await axios.get(url, { params }, ...other);
      return Api.fetch(response);
    } catch (e) {
      const error = Api.fetch(e.response);
      logger.error(error); // TODO: dispatch common error
      return null;
    }
  }

  static async post(url: string, data: Object, ...other: *) {
    if (typeof IS_MOCK !== 'undefined' && IS_MOCK) {
      logger.log('POST-MOCKED', url, data);
      // eslint-disable-next-line
      return require(`mock/${url}/post.json`);
    }

    try {
      logger.log('POST', url, data);
      const response = await axios.post(url, { ...data }, ...other);
      return Api.fetch(response);
    } catch (e) {
      const error = Api.fetch(e.response);
      logger.error(error); // TODO: dispatch common error
      return null;
    }
  }

  static fetch(response: AxiosResult) {
    return response.status === 200 ? (response.data && response.data.success)
      : (response.data && response.data.error);
  }
}

export default Api;
