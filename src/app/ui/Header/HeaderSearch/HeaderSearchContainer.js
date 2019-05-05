// @flow
import { reduxForm } from 'redux-form/immutable';
import { SEARCH_FORM_KEY } from 'constants/forms/search';

import HeaderSearch from './HeaderSearch.native';
import { onSubmit } from './actions';

export default reduxForm({
  form: SEARCH_FORM_KEY,
  onSubmit,
})(
  HeaderSearch
);
