import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminPublishersEditPage from '../../containers/admin/AdminPublishersEditPage';
import SideNavigation from '../../components/SideNavigation';

const AdminPublishersEdit = ({ match }) => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminPublishersEditPage publisherId={match.params.publisherId} />
  </div>
);

AdminPublishersEdit.propTypes = {
  match: PropTypes.object.isRequired
};
export default AdminPublishersEdit;
