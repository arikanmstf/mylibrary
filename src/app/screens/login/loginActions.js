/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';
import type { Immutable } from 'store/ImmutableTypes';

import { loginRequest } from './loginServices';
import type { submitLoginFormRequest } from './LoginTypes';

export const submitLoginForm = (form: Immutable<submitLoginFormRequest>) => {
  logger.log('submitLoginForm');
  loginRequest(form.toJS());
};

export const mapStateToProps = () => ({});
export const mapDispatchToProps = () => ({});
