import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactLogo from 'img/react-logo.png';

class LoginComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getLogin() {
    this.props.getLogin(this.state);
  }
  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.getLogin();
    }
  }

  render() {
    return (
      <div className="login-page">
        <img
          src={ReactLogo}
          width="180"
          height="180"
        />
        <div className="form-group">
          <input
            type="text"
            className="form-control input input-text"
            placeholder="Enter your username"
            onChange={(e) => this.setState({ username: e.target.value })}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control input input-password"
            placeholder="Enter your password"
            onKeyPress={this.handleKeyPress}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="alert alert-info">
            Username: guest
          </div>
          <div className="alert alert-info">
            Password: 123
          </div>
        </div>
        <button className="btn btn-info btn-block" onClick={() => this.getLogin()} >
          Login
        </button>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  getLogin: PropTypes.func.isRequired
};

export default LoginComponent;
