import React, { Component } from 'react';

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';

export default class AdminPage extends Component {
  render() {
    return (
      <div>
        <NavbarHeader />
        <SideNavigation />
      </div>
    );
  }
}
