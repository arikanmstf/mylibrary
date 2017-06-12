import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../../containers/NavbarHeader';
import AdminBooksPage from '../../containers/admin/AdminBooksPage';

import SideNavigation from '../../components/SideNavigation';

export default class AdminBooks extends Component {

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
          <AdminBooksPage search={this.state.search} />
      </div>
    );
  }
}
AdminBooks.propTypes = {
  match: PropTypes.object.isRequired
};
