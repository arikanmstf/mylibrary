import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminPublicationsEditPage from './AdminPublicationsEditPage';

const AdminPublicationsEdit = ({ match }) => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminPublicationsEditPage publicationId={match.params.publicationId} />
  </div>
);

AdminPublicationsEdit.propTypes = {
  match: PropTypes.object.isRequired
};
export default AdminPublicationsEdit;
