// @flow
import React, { Component, ErrorInfo } from 'react';
import logger from 'helpers/logger';
import { Screen } from 'ui/native';
import { errorMessages } from './constants';

import type { ErrorProps, ErrorState } from './types';

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props) {
    super(props);
    this.state = { error: props.error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    logger.log(error, info);
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error && error.stack ? (
      <Screen>
        { error.code ? error.code : null}
        {error.code ? errorMessages[error.code] : error.stack || error.message || error}
      </Screen>
    ) : children;
  }
}

export default ErrorBoundary;
