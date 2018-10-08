/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
// TODO: error types
export type GeneralError = any;
export type ModalError = any;

export type ErrorProps = {
  children?: *,
  error?: *,
  updateModalError: Function,
  generalError: GeneralError,
  modalError: ModalError,
};

export type ErrorState = {
  error: *,
};
