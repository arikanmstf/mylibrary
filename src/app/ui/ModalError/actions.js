// @flow
import { updateModalError } from 'ui/GeneralError/actions';

export const mapStateToProps = (state: Immutable<State>) => ({
  modalError: state.toJS().error.modalError,
});

export const mapDispatchToProps = {
  updateModalError,
};
