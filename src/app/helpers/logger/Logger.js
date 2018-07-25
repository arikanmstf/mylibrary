// @flow
import { isDevelopment } from 'helpers/env';

class Logger {
  static log(...args) {
    if (isDevelopment()) {
      console.log(...args);
    }
  }
}

export default Logger;
