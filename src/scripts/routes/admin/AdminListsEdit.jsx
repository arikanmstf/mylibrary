import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminListsEditPage from '../../containers/admin/AdminListsEditPage';
import SideNavigation from '../../components/SideNavigation';

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
