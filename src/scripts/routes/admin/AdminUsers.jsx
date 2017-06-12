import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminUsersPage from '../../containers/admin/AdminUsersPage';

import SideNavigation from '../../components/SideNavigation';

export default class AdminUsers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: {
        pageNo: props.match.params.pageNo || 1
      }
    };
  }

  render() {
    return (
      <div>
          <NavbarHeader />
          <SideNavigation />
          <AdminUsersPage search={this.state.search} />
      </div>
    );
  }
}
AdminUsers.propTypes = {
  match: PropTypes.object.isRequired
};
