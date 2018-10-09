/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
// TODO: error types
export type GeneralError = any;

export type GeneralErrorProps = {
  children?: *,
  error?: *,
  generalError: GeneralError,
};

export type GeneralErrorState = {
  error: *,
};
