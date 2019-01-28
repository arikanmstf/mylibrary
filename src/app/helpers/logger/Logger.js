// @flow
import { isDevelopment } from 'helpers/env';

class Logger {
  static log() {
    if (isDevelopment()) {
      // console.log(...args); // eslint-disable-line no-console
    }
  }

  static error(...args: *) {
    throw new Error(...args);
  }
}

export default Logger;
