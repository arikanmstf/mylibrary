// @flow
import a from 'axios';
import logger from 'helpers/logger';
import storage, { LOGIN_STATE } from 'helpers/storage';
import getConfig from 'config/get';
import { updateModalError } from 'ui/GeneralError/actions';

import type { Dispatch } from 'redux';

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

type AxiosError = {
  response?: AxiosResult,
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

    logger.log('Login Token is set.');

    return a.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': baseURL,
      },
      withCredentials: true,
    });
  }

  static get(dispatch?: ?Dispatch<*>) {
    return async (url: string, params: Object, ...other: *) => {
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
        if (dispatch) {
          dispatch(updateModalError(e));
        }
        throw Api.error(e);
      }
    };
  }

  static post(dispatch: Dispatch<*>) {
    return async (url: string, data: Object, ...other: *) => {
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
        dispatch(updateModalError(e));
        throw Api.error(e);
      }
    };
  }

  static fetch(response: AxiosResult) {
    if (response && response.status === 200 && response.data && response.data.success) {
      return response.data.success;
    }
    throw response.data.error;
  }

  static error(e: AxiosError) {
    return new Error(e);
  }
}

export default Api;
