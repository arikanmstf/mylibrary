import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminWritersEditPage from '../../containers/admin/AdminWritersEditPage';
import SideNavigation from '../../components/SideNavigation';

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
