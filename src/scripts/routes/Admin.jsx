import React, { Component } from 'react';

import NavbarHeader from '../containers/NavbarHeader';
import AdminHome from '../containers/admin/AdminHome';

import SideNavigation from '../components/SideNavigation';

export default class Admin extends Component {
  render() {
    return (
      <div>
          <NavbarHeader />
          <SideNavigation />
          <AdminHome />
      </div>
    );
  }
}
