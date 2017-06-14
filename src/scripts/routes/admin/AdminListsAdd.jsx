import React from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminListsAddPage from '../../containers/admin/AdminListsAddPage';
import SideNavigation from '../../components/SideNavigation';

const AdminListsAdd = () => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminListsAddPage />
  </div>
);

export default AdminListsAdd;
