import React, { Component } from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminPublicationsPage from '../../containers/admin/AdminPublicationsPage';

import SideNavigation from '../../components/SideNavigation';

export default class AdminPublications extends Component {
  render() {
    return (
      <div>
          <NavbarHeader />
          <SideNavigation />
          <AdminPublicationsPage />
      </div>
    );
  }
}
