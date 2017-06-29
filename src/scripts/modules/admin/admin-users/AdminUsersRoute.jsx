import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminUsersPage from './AdminUsersPage';

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
