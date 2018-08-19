// @flow
import a from 'axios';
import logger from 'helpers/logger';
import storage, { LOGIN_STATE } from 'helpers/storage';
import getConfig from 'config/get';

declare var IS_MOCK: string;

const { baseURL } = getConfig();
logger.log(`baseURL is set to: ${baseURL}`);

type AxiosResult = {
  data?: {
    success?: Object,
    error?: string,
  },
  status: number,
  statusText: string,
}

class Api {
  static async createAxios() {
    let token = '';
    try {
      const loginState = await storage.load({ key: LOGIN_STATE });
      token = loginState ? loginState.token : '';
    } catch (e) {
      logger.log('TOKEN couldn"t found');
    }

    logger.log(`Login Token is set to: ${token}`);

    return a.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': baseURL,
      },
      withCredentials: true,
    });
  }

  static async get(url: string, params: Object, ...other: *) {
    if (typeof IS_MOCK !== 'undefined' && IS_MOCK) {
      logger.log('GET-MOCKED', url, params, ...other);
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`mock/${url}/get.json`);
    }

    const axios = await Api.createAxios();
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
    if (typeof IS_MOCK !== 'undefined' && IS_MOCK) {
      logger.log('POST-MOCKED', url, data, ...other);
      // eslint-disable-next-line
      return require(`mock/${url}/post.json`);
    }

    const axios = await Api.createAxios();
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
