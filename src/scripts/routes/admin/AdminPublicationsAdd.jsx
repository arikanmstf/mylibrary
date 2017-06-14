import React from 'react';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminPublicationsAddPage from '../../containers/admin/AdminPublicationsAddPage';
import SideNavigation from '../../components/SideNavigation';

const AdminPublicationsAdd = () => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminPublicationsAddPage />
  </div>
);

export default AdminPublicationsAdd;
