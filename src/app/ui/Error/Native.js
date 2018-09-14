// @flow
import React, { Component, ErrorInfo } from 'react';
import logger from 'helpers/logger';
import { Screen } from 'ui/native';

import type { ErrorProps, ErrorState } from './types';

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props) {
    super(props);
    this.state = { error: null };
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
        {error.stack}
      </Screen>
    ) : children;
  }
}

export default ErrorBoundary;
