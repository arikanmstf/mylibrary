import React from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminTagsAddPage from '../../containers/admin/AdminTagsAddPage';
import SideNavigation from '../../components/SideNavigation';

const AdminTagsAdd = () => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminTagsAddPage />
  </div>
);

export default AdminTagsAdd;
