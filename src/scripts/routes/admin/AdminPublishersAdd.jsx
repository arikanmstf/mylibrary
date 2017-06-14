import React from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminPublishersAddPage from '../../containers/admin/AdminPublishersAddPage';
import SideNavigation from '../../components/SideNavigation';

const AdminPublishersAdd = () => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminPublishersAddPage />
  </div>
);

export default AdminPublishersAdd;
