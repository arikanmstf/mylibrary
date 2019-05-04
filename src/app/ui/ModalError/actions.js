// @flow
import { updateModalError } from 'ui/GeneralError/actions';
import { clearLoader } from 'ui/ModalLoader/actions';

import type { ImmutableState } from 'store/StateTypes';

export const mapStateToProps = (state: ImmutableState) => ({
  modalError: state.toJS().error.modalError,
});

export const mapDispatchToProps = {
  updateModalError,
  clearLoader,
};
