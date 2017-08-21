import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';
import { connect } from 'react-redux';
import { getLogout } from 'modules/login/LoginActions';
import Storage from 'common/Storage';

const isAdmin = Storage.get('is_admin') > 0;

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
              <Link className="navbar-brand" to={config.homeUrl}>MyLibray</Link>
            </div>
            <ul className="nav navbar-nav">
              { isAdmin ? <li>
                <Link to={`${config.homeUrl}admin`}>
                  <span>Admin</span>
                  <i className="glyphicon glyphicon-lock" />
                </Link>
              </li> : null }
              <li>
                <Link to={`${config.homeUrl}profile`}>
                  <span>Profile</span>
                  <i className="glyphicon glyphicon-user" />
                </Link>
              </li>
              <li>
                <Link to={`${config.homeUrl}tags`}>
                  <span>Tags</span>
                  <i className="glyphicon glyphicon-tags" />
                </Link>
              </li>
              <li>
                <Link to={`${config.homeUrl}lists`}>
                  <span>Lists</span>
                  <i className="glyphicon glyphicon-list" />
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
