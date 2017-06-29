import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminTagsEditPage from './AdminTagsEditPage';

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
