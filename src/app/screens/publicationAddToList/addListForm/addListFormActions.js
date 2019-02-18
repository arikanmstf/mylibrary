/**
 * Actions Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import { ADD_LIST_FORM_KEY } from 'constants/forms/addList';
import { addList } from 'modules/list/actions';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';

import validate from './addListValidations';
import type { AddListFormRequest } from './AddListFormTypes';

export const submitAddListForm = async (form: Immutable<AddListFormRequest>, dispatch: Dispatch<*>) => {
  const values = form.toJS();
  dispatch(addList(values));
};

export const formConfig = {
  form: ADD_LIST_FORM_KEY,
  validate,
};

export const mapStateToProps = null;
export const mapDispatchToProps = null;
