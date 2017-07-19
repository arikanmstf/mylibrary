import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogout } from 'modules/login/LoginActions';

class NavbarHeader extends Component {

  getLogout() {
    this.props.getLogout();
  }
  render() {
    return (
        <div className="navbar-header-container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">MyLibray</Link>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/admin">
                    <span>Admin</span>
                    <i className="glyphicon glyphicon-lock" />
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <span>Profile</span>
                    <i className="glyphicon glyphicon-user" />
                  </Link>
                </li>
                <li>
                  <a onClick={() => this.getLogout()}>
                    <span>Logout</span>
                    <i className="glyphicon glyphicon-log-out" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}
NavbarHeader.propTypes = {
  getLogout: PropTypes.func.isRequired
};
const mapDispatchToProps = (dispatch) => {
  return { getLogout: () => dispatch(getLogout()) };
};

export default connect(null, mapDispatchToProps)(NavbarHeader);
