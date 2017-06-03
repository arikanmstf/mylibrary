import React, { Component } from 'react';

export default class NavbarHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">MyLibray</a>
          </div>
        </div>
      </nav>
    );
  }
}
