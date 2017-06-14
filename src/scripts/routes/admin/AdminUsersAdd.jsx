import React from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminUsersAddPage from '../../containers/admin/AdminUsersAddPage';
import SideNavigation from '../../components/SideNavigation';

const AdminUsersAdd = () => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminUsersAddPage />
  </div>
);

export default AdminUsersAdd;
