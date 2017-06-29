import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminWritersEditPage from './AdminWritersEditPage';

const AdminWritersEdit = ({ match }) => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminWritersEditPage writerId={match.params.writerId} />
  </div>
);

AdminWritersEdit.propTypes = {
  match: PropTypes.object.isRequired
};
export default AdminWritersEdit;
