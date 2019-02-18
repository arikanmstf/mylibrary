// @flow
import Validation from 'helpers/validation';
import fields from 'constants/forms/addList';

const loginValidations = {
  [fields.NAME]: [Validation.isRequired],
};

export default Validation.make(loginValidations);
