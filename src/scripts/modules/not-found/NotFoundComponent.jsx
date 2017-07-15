import React, { Component } from 'react';

import NavbarHeader from 'modules/common/NavbarHeader';

class NotFoundComponent extends Component {
  render() {
    return (
      <div>
          <NavbarHeader />
          <h1>404</h1>
          <h2>Requested page not found.</h2>
      </div>
    );
  }
}
export default NotFoundComponent;
