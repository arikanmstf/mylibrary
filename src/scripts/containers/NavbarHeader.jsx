import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogout } from '../actions/ResolvedGetLogin';

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
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><a onClick={() => this.getLogout()}>Logout</a></li>
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
