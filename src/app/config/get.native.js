// @flow

import configLocal from 'config/local.json';
import configLive from 'config/live.json';

const { API_ENV } = process.env;

const ENV = {
  local: {
    ...configLocal,
  },
  live: {
    ...configLive,
  },
};

const getEnvVars = () => {
  if (API_ENV === null || API_ENV === undefined || API_ENV === '') {
    return ENV.dev;
  }

  return ENV[API_ENV];
};

export default getEnvVars;
