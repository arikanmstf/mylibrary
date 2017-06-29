import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminBooksPage from './AdminBooksPage';

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
