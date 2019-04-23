// @flow
import { updateModalError } from 'ui/GeneralError/actions';
import { clearLoader } from 'ui/ModalLoader/actions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapStateToProps = (state: Immutable<State>) => ({
  modalError: state.toJS().error.modalError,
});

export const mapDispatchToProps = {
  updateModalError,
  clearLoader,
};
