import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminPublishersPage from '../../containers/admin/AdminPublishersPage';

import SideNavigation from '../../components/SideNavigation';

export default class AdminPublishers extends Component {

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
          <AdminPublishersPage search={this.state.search} />
      </div>
    );
  }
}
AdminPublishers.propTypes = {
  match: PropTypes.object.isRequired
};
