// @flow
import Validation from 'helpers/validation';
import fields from 'constants/forms/card';

const loginValidations = {
  [fields.TITLE]: [Validation.isRequired],
};

export default Validation.make(loginValidations);
