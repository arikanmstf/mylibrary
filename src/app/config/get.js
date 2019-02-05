// @flow

import configLocal from 'config/local.json';
import configLive from 'config/live.json';

declare var API_ENV: string;

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
