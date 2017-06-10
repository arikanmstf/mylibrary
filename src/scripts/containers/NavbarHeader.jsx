import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarHeader extends Component {
  render() {
    return (
        <div className="navbar-header-container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">MyLibray</Link>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="/admin">Admin</Link></li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}
