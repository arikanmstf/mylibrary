import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';
import AdminTagsPage from './AdminTagsPage';

export default class AdminTags extends Component {

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
          <AdminTagsPage search={this.state.search} />
      </div>
    );
  }
}
AdminTags.propTypes = {
  match: PropTypes.object.isRequired
};
