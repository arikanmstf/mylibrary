import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminWritersPage from './AdminWritersPage';

export default class AdminWriters extends Component {

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
          <AdminWritersPage search={this.state.search} />
      </div>
    );
  }
}
AdminWriters.propTypes = {
  match: PropTypes.object.isRequired
};
