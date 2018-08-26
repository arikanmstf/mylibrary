// @flow
import logger from 'helpers/logger';
import t from 'helpers/i18n/Translate';

const EMAIL_REGEX = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

class Validation {
  static isEmail(value: string): string | false {
    return !(EMAIL_REGEX.test(String(value).toLowerCase()))
      ? t.get('VALIDATION_IS_EMAIL') : false;
  }

  static isRequired(value: *): string | false {
    return (typeof value === 'undefined'
      || value === null
      || (typeof value === 'string' && value.trim() === '')
      || (typeof value === 'object' && Object.keys(value).length === 0)
    ) ? t.get('VALIDATION_IS_REQUIRED') : false;
  }

  static minLength(length: number): string | false {
    return (value: string | Array<*>) => (
      !(typeof value !== 'undefined' && value && value.length >= length)
        ? t.get('VALIDATION_MIN_LENGTH', { length }) : false
    );
  }

  static make(rules: Object): Function {
    const validate = (values: Map) => {
      const errors = {};

      const fieldNames = Object.keys(rules);
      fieldNames.forEach((fieldName) => {
        const validationFunctions = rules[fieldName];
        const value = (values.get(fieldName));

        validationFunctions.every((validationFunction) => {
          if (validationFunction) {
            const error = validationFunction(value);
            if (error) {
              errors[fieldName] = error;
              return false;
            }
          }
          return true;
        });
      });
      logger.log('Validation with following errors:', errors);
      return errors;
    };

    return validate;
  }
}

export default Validation;
