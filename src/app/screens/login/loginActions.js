/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import type { Immutable } from 'store/ImmutableTypes';

import { loginRequest } from './loginServices';
import type { submitLoginFormRequest } from './LoginTypes';

export const submitLoginForm = async (form: Immutable<submitLoginFormRequest>, dispatch) => {
  logger.log('submitLoginForm');
  dispatch(showLoader());
  await loginRequest(form.toJS());
  dispatch(hideLoader());
};

export const mapStateToProps = () => ({});
export const mapDispatchToProps = () => ({});
