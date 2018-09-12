// @flow
import { initialize, change } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { RowDetail } from 'ui';
import logger from 'helpers/logger';
import { toggleList } from 'screens/publicationDetail/publicationDetailActions';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { SubmitFormType } from 'ui/RowDetail/types';

const onFormInitialize = (key: string, form: SubmitFormType) => {
  return (dispatch: Dispatch<*>) => {
    dispatch(initialize(key, form));
  };
};

const onFormChange = (key: string, form: SubmitFormType) => {
  return (dispatch: Dispatch<*>) => {
    const fields = Object.keys(form);
    fields.forEach((value) => {
      dispatch(change(key, value, form[value]));
    });
  };
};

const onSubmit = (form: Immutable<SubmitFormType>, dispatch: Dispatch<*>) => {
  logger.log('submitAddToListForm', form.toJS());
  dispatch(toggleList(form.toJS()));
};

const mapDispatchToProps = {
  onFormInitialize,
  onFormChange,
};

export default reduxForm({
  onSubmit,
})(connect(null, mapDispatchToProps)(RowDetail));
