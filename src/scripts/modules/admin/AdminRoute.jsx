import React, { Component } from 'react';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminPage from './AdminPage';

export default class Admin extends Component {
  render() {
    return (
      <div>
          <NavbarHeader />
          <SideNavigation />
          <AdminPage />
      </div>
    );
  }
}
