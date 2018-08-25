// @flow
import Validation from 'helpers/validation';
import fields from 'constants/forms/register';

const loginValidations = {
  [fields.NAME]: [
    Validation.isRequired,
    Validation.minLength(3),
  ],
  [fields.DISPLAY_NAME]: [Validation.isRequired],
  [fields.EMAIL]: [Validation.isRequired, Validation.isEmail],
  [fields.PASSWORD]: [Validation.isRequired],
  [fields.PASSWORD_REPEAT]: [Validation.isRequired],
};

export default Validation.make(loginValidations);
