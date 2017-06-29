import React from 'react';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminUsersAddPage from './AdminUsersAddPage';

const AdminUsersAdd = () => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminUsersAddPage />
  </div>
);

export default AdminUsersAdd;
