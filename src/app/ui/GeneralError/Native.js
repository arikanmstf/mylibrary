// @flow
import React, { PureComponent, ErrorInfo } from 'react';
import { connect } from 'react-redux';
import logger from 'helpers/logger';
import { Screen } from 'ui/native';
import { errorMessages } from './constants';
import { mapStateToProps, mapDispatchToProps } from './actions';

import type { GeneralErrorProps, GeneralErrorState } from './types';

class GeneralError extends PureComponent<GeneralErrorProps, GeneralErrorState> {
  constructor(props) {
    super(props);
    this.state = { error: props.error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    logger.log(error, info);
    this.setState({ error });
  }

  render() {
    const { error: stateError } = this.state;
    const { children, generalError } = this.props;
    const error = stateError || generalError;

    return error ? (
      <Screen>
        { error.code ? <h1>{error.code}</h1> : error.message}
        <pre>{error.code ? errorMessages[error.code] : error.stack || error.message || error}</pre>
      </Screen>
    ) : children;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralError);
