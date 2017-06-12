import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideNavigation extends Component {
  render() {
    return (
        <div className="side-navigation col-sm-3 col-md-3 fixed">
          <nav className="navbar navbar-default sidebar">
              <div className="container-fluid">
              <div className="navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/admin">Home</Link></li>
                  <li><Link to="/admin/publications">Publications</Link></li>
                  <li><Link to="/admin/books">Books</Link></li>
                  <li><Link to="/admin/writers">Writers</Link></li>
                  <li><Link to="/admin/publishers">Publishers</Link></li>
                  <li><Link to="/admin/users">Users</Link></li>
                  <li><Link to="/admin/tags">Tags</Link></li>
                  <li><Link to="/admin/lists">Lists</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}
