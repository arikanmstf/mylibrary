import React from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminWritersAddPage from '../../containers/admin/AdminWritersAddPage';
import SideNavigation from '../../components/SideNavigation';

const AdminWritersAdd = () => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminWritersAddPage />
  </div>
);

export default AdminWritersAdd;
