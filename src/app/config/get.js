import { getEnv } from 'helpers/env';

// eslint-disable-next-line import/no-dynamic-require
const config = require(`config/${getEnv()}.json`);

export default function () {
  return config;
}
