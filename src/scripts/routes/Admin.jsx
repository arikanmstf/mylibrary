import React, { Component } from 'react';

import NavbarHeader from '../containers/NavbarHeader';

import SideNavigation from '../components/sideNavigation';

export default class Admin extends Component {
  render() {
    return (
      <div>
          <NavbarHeader />
          <SideNavigation />
          <h1>This is admin page.</h1>
      </div>
    );
  }
}
