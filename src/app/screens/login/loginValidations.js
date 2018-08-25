// @flow
import Validation from 'helpers/validation';
import fields from 'constants/forms/login';

const loginValidations = {
  [fields.EMAIL]: [Validation.isRequired, Validation.isEmail],
  [fields.PASSWORD]: [Validation.isRequired],
};

export default Validation.make(loginValidations);
