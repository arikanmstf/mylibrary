import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminBooksEditPage from './AdminBooksEditPage';

const AdminBooksEdit = ({ match }) => (
  <div>
    <NavbarHeader />
    <SideNavigation />
    <AdminBooksEditPage bookId={match.params.bookId} />
  </div>
);

AdminBooksEdit.propTypes = {
  match: PropTypes.object.isRequired
};
export default AdminBooksEdit;
