// @flow
import React, { PureComponent, ErrorInfo, Fragment } from 'react';
import { connect } from 'react-redux';
import logger from 'helpers/logger';
import { Screen, Modal } from 'ui/native';
import { errorMessages } from './constants';
import { mapStateToProps, mapDispatchToProps } from './actions';

import type { ErrorProps, ErrorState } from './types';

class ErrorBoundary extends PureComponent<ErrorProps, ErrorState> {
  constructor(props) {
    super(props);
    this.state = { error: props.error };
  }

  handleModalClose = () => {
    const { updateModalError } = this.props;
    updateModalError(null);
  };

  componentDidCatch(error: Error, info: ErrorInfo): void {
    logger.log(error, info);
    this.setState({ error });
  }

  render() {
    const { error: stateError } = this.state;
    const { children, generalError, modalError } = this.props;
    const error = stateError || generalError;

    return error ? (
      <Screen>
        { error.code ? <h1>{error.code}</h1> : error.message}
        <pre>{error.code ? errorMessages[error.code] : error.stack || error.message || error}</pre>
      </Screen>
    ) : (
      <Fragment>
        {children}
        <Modal
          text={modalError && modalError.stack}
          open={modalError}
          onClose={this.handleModalClose}
        />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
