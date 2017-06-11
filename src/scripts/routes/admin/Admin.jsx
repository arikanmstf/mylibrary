import React, { Component } from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminPage from '../../containers/admin/AdminPage';

import SideNavigation from '../../components/SideNavigation';

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
