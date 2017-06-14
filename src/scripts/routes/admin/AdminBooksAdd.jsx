import React from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminBooksAddPage from '../../containers/admin/AdminBooksAddPage';
import SideNavigation from '../../components/SideNavigation';

const AdminBooksAdd = () => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminBooksAddPage />
  </div>
);

export default AdminBooksAdd;
