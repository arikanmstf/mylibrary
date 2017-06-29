import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminPublishersEditPage from './AdminPublishersEditPage';

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
