/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import storage, { LOGIN_STATE } from 'helpers/storage';
import { fetchInitialState } from 'screens/login/loginActions';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';

import { postRegister } from './registerServices';
import type { SubmitRegisterFormRequest } from './RegisterTypes';

export const submitRegisterForm = async (form: Immutable<SubmitRegisterFormRequest>, dispatch: Dispatch<*>) => {
  dispatch(showLoader());

  const result = await postRegister(form.toJS());
  const data = {
    key: LOGIN_STATE,
    data: { ...result },
    expires: 1000 * 3600,
  };
  storage.save(data);

  dispatch(fetchInitialState());
  dispatch(hideLoader());
};

export const mapStateToProps = null;
export const mapDispatchToProps = null;
