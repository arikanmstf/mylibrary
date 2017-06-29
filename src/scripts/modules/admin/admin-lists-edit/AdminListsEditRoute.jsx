import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminListsEditPage from './AdminListsEditPage';

const AdminListsEdit = ({ match }) => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminListsEditPage listId={match.params.listId} />
  </div>
);

AdminListsEdit.propTypes = {
  match: PropTypes.object.isRequired
};
export default AdminListsEdit;
