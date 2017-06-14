import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminUsersEditPage from '../../containers/admin/AdminUsersEditPage';
import SideNavigation from '../../components/SideNavigation';

const AdminUsersEdit = ({ match }) => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminUsersEditPage userId={match.params.userId} />
  </div>
);

AdminUsersEdit.propTypes = {
  match: PropTypes.object.isRequired
};
export default AdminUsersEdit;
