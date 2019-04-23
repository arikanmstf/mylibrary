/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
export type ModalError = {
  stack: string,
};

export type ModalErrorProps = {
  modalError?: ModalError,
  updateModalError: Function,
  clearLoader: Function,
};
