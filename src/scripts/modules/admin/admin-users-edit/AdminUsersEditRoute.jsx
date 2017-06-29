import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminUsersEditPage from './AdminUsersEditPage';

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
