import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminPublicationsPage from '../../containers/admin/AdminPublicationsPage';

import SideNavigation from '../../components/SideNavigation';

export default class AdminPublications extends Component {

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
          <AdminPublicationsPage search={this.state.search} />
      </div>
    );
  }
}
AdminPublications.propTypes = {
  match: PropTypes.object.isRequired
};
