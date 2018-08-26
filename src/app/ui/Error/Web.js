// @flow
import * as React from 'react';
import logger from 'helpers/logger';
import { Screen } from 'ui';

import type { ErrorProps, ErrorState } from './types';

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    logger.log(error, info);
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error && error.stack ? (
      <Screen>
        <h1>Something went wrong</h1>
        <pre>{error.stack}</pre>
      </Screen>
    ) : children;
  }
}

export default ErrorBoundary;
