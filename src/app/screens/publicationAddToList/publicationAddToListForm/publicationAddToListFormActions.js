/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { initialize, change } from 'redux-form';
import logger from 'helpers/logger/index';
import { toggleList } from 'modules/publication/actions';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { SubmitFormType } from 'ui/RowDetail/types';

const onFormInitialize = (key: string, form: SubmitFormType) => {
  return (dispatch: Dispatch<*>) => {
    logger.log('onFormInitialize', key);
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

export const onSubmit = (form: Immutable<SubmitFormType>, dispatch: Dispatch<*>) => {
  logger.log('submitAddToListForm', form.toJS());
  dispatch(toggleList(form.toJS()));
};

export const mapDispatchToProps = {
  onFormInitialize,
  onFormChange,
};
