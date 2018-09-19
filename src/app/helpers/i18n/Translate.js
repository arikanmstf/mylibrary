// @flow
import logger from 'helpers/logger';
import error from 'constants/messages/error';
import * as languages from './languages';

const DEFAULT_LANGUAGE = 'en';

class Translate {
  data: Object;

  constructor(lang?: string = DEFAULT_LANGUAGE) {
    const data = languages[lang];
    if (!data) {
      logger.log(error.LANG_NOT_FOUND);
    }
    this.data = data;
  }

  getData(): Object {
    return this.data || {};
  }

  get(key?: ?string, variables?: Object): string {
    const data = this.getData();
    let result = data[key] || key || '';
    if (variables) {
      const variableKeys = Object.keys(variables);
      variableKeys.forEach((variableKey) => {
        result = result.replace(new RegExp(`{{${variableKey}}}`, 'g'), variables[variableKey]);
      });
    }
    return result;
  }
}

const T = new Translate();
export default T;
