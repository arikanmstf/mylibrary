/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { Component } from 'react';
import logger from 'helpers/logger';
import type { LogoutProps } from './LogoutTypes';

class Logout extends Component<LogoutProps> {
  componentDidMount() {
    const { makeLogoutRequest } = this.props;
    makeLogoutRequest();
  }

  render() {
    logger.log('render: Logout');
    return null;
  }
}

export default Logout;
