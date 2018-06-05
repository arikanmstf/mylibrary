import React, { Component } from 'react';
import config from 'config';
import PropTypes from 'prop-types';

import Navigation from 'react-toolbox/lib/navigation/Navigation';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Storage from 'common/Storage';

const isAdmin = Storage.get('is_admin') > 0;

const userActions = [
  { label: 'Tags', raised: true, icon: 'bookmark', href: `${config.homeUrl}tags`, mini: true },
  { label: 'Lists', raised: true, icon: 'list', href: `${config.homeUrl}lists`, mini: true }
];

const adminActions = [
  { label: 'Publications', raised: true, href: `${config.homeUrl}admin/publications`, mini: true },
  { label: 'Books', raised: true, icon: 'book', href: `${config.homeUrl}admin/books`, mini: true },
  { label: 'Writers', raised: true, icon: 'person', href: `${config.homeUrl}admin/writers`, mini: true },
  { label: 'Publishers', raised: true, href: `${config.homeUrl}admin/publishers`, mini: true },
  { label: 'Users', raised: true, icon: 'people', href: `${config.homeUrl}admin/users`, mini: true },
  { label: 'Tags', raised: true, icon: 'bookmark', href: `${config.homeUrl}admin/tags`, mini: true },
  { label: 'Lists', raised: true, icon: 'list', href: `${config.homeUrl}admin/lists`, mini: true }
];

class SideNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerActive: props.drawerActive
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      drawerActive: nextProps.drawerActive
    });
  }

  closeDrawerActive = () => {
    this.props.closeDrawer();
  }

  render() {
    return (
      <NavDrawer permanentAt="xl" onOverlayClick={this.closeDrawerActive} active={this.state.drawerActive}>
        <Navigation type="vertical" actions={userActions} />
        { isAdmin ? <div>{`Admin`}<hr /><Navigation type="vertical" actions={adminActions} /></div> : null }
      </NavDrawer>
    );
  }
}

SideNavigation.propTypes = {
  drawerActive: PropTypes.bool,
  closeDrawer: PropTypes.func.isRequired
};

SideNavigation.defaultProps = {
  drawerActive: false
};

export default SideNavigation;
