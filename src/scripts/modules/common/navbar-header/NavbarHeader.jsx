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
  { label: 'Home', raised: true, icon: 'home', href: `${config.homeUrl}`, mini: true },
  { label: 'Profile', raised: true, icon: 'person', href: `${config.homeUrl}profile`, mini: true }
];

if (isAdmin) {
  actions.unshift({ label: 'Admin', raised: true, icon: 'account_circle', href: `${config.homeUrl}admin` });
}

class NavbarHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigationClassName: 'disabled'
    };
    actions.push({ label: 'Logout', raised: true, icon: 'lock', onClick: () => this.getLogout(), accent: true });
  }

  getLogout() {
    this.props.getLogout();
  }

  toggleNavigation = () => {
    if (this.state.navigationClassName) {
      this.setState({ navigationClassName: null });
    } else {
      this.setState({ navigationClassName: 'disabled' });
    }
  }

  render() {
    return (
      <AppBar
        title="MyLibrary"
        leftIcon="menu"
        onLeftIconClick={this.props.onLeftIconClick}
        rightIcon="arrow_drop_down_circle"
        onRightIconClick={this.toggleNavigation}
        className="navbar-header"
      >
        <Navigation
          type="horizontal"
          actions={actions}
          className={`navigation ${this.state.navigationClassName}`}
        />
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
