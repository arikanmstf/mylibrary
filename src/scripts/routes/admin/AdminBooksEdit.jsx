import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminBooksEditPage from '../../containers/admin/AdminBooksEditPage';
import SideNavigation from '../../components/SideNavigation';

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
