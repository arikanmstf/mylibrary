import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminTagsEditPage from '../../containers/admin/AdminTagsEditPage';
import SideNavigation from '../../components/SideNavigation';

const AdminTagsEdit = ({ match }) => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminTagsEditPage tagId={match.params.tagId} />
  </div>
);

AdminTagsEdit.propTypes = {
  match: PropTypes.object.isRequired
};
export default AdminTagsEdit;
