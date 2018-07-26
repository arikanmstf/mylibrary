import { getEnv } from 'helpers/env';
import configLocal from 'config/local.json';
import configLive from 'config/live.json';

const config = getEnv() === 'local' ? configLocal : configLive;

export default function () {
  return { ...config, ...config.ios };
}
