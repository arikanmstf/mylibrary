// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'ui/native';
import { mapStateToProps, mapDispatchToProps } from './actions';

import type { ModalErrorProps } from './types';

class ErrorBoundary extends PureComponent<ModalErrorProps> {
  handleModalClose = () => {
    const { updateModalError } = this.props;
    updateModalError(null);
  };

  render() {
    const { modalError } = this.props;

    return modalError ? (
      <Modal
        text={modalError && modalError.stack}
        open={modalError}
        onClose={this.handleModalClose}
      />
    ) : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
