import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';

import config from 'config';
import { connect } from 'react-redux';
import { getLogout } from 'modules/login/LoginActions';
import Storage from 'common/Storage';

const isAdmin = Storage.get('is_admin') > 0;
const actions = [
  { label: 'Profile', raised: true, icon: 'person', href: `${config.homeUrl}profile`, mini: true }
];

if (isAdmin) {
  actions.unshift({ label: 'Admin', raised: true, icon: 'account_circle', href: `${config.homeUrl}admin` });
}

class NavbarHeader extends Component {

  getLogout() {
    this.props.getLogout();
  }

  render() {
    actions.push({ label: 'Logout', raised: true, icon: 'lock', onClick: () => this.getLogout(), accent: true });
    return (
      <AppBar title="MyLibrary" leftIcon="menu" onLeftIconClick={this.props.onLeftIconClick}>
        <Navigation type="horizontal" actions={actions} />
      </AppBar>
    );
  }
}
NavbarHeader.propTypes = {
  getLogout: PropTypes.func.isRequired,
  onLeftIconClick: PropTypes.func
};

NavbarHeader.defaultProps = {
  onLeftIconClick: () => {}
};

const mapDispatchToProps = (dispatch) => {
  return { getLogout: () => dispatch(getLogout()) };
};

export default connect(null, mapDispatchToProps)(NavbarHeader);
