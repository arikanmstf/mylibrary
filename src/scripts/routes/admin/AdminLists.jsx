import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminListsPage from '../../containers/admin/AdminListsPage';

import SideNavigation from '../../components/SideNavigation';

export default class AdminLists extends Component {

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
          <AdminListsPage search={this.state.search} />
      </div>
    );
  }
}
AdminLists.propTypes = {
  match: PropTypes.object.isRequired
};
