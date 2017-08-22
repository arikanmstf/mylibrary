import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/Link';

import config from 'config';
import { connect } from 'react-redux';
import { getLogout } from 'modules/login/LoginActions';
import Storage from 'common/Storage';

const isAdmin = Storage.get('is_admin') > 0;

class NavbarHeader extends Component {

  getLogout() {
    this.props.getLogout();
  }

  render() {
    return (
      <AppBar title="MyLibrary" leftIcon="menu">
        <Navigation type="horizontal">
          { isAdmin ?
            <Link href={`${config.homeUrl}admin`} label="Admin" />
            : null }
          <Link href={`${config.homeUrl}profile`} label="Profile" />
          <Link href={`${config.homeUrl}tags`} label="Tags" />
          <Link href={`${config.homeUrl}lists`} label="Lists" />
          <a onClick={() => this.getLogout()}>
            <span>Logout</span>
            <i className="glyphicon glyphicon-log-out" />
          </a>
        </Navigation>
      </AppBar>
    );
  }
}
NavbarHeader.propTypes = {
  getLogout: PropTypes.func.isRequired
};
const mapDispatchToProps = (dispatch) => {
  return { getLogout: () => dispatch(getLogout()) };
};

export default connect(null, mapDispatchToProps)(NavbarHeader);
