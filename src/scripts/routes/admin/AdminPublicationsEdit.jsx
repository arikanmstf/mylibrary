import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminPublicationsEditPage from '../../containers/admin/AdminPublicationsEditPage';
import SideNavigation from '../../components/SideNavigation';

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
