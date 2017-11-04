import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input/Input';

import ReactLogo from 'img/react-logo.png';
import Button from 'react-toolbox/lib/button/Button';

class LoginComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getLogin = () => {
    this.props.getLogin(this.state);
  }
  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.getLogin();
    }
  }
  handleChange = (value, ev) => {
    this.setState({ [ev.target.name]: value });
  };

  render() {
    return (
      <div className="login-page">
        <img
          alt="react logo"
          src={ReactLogo}
          width="180"
          height="180"
        />
        <div className="form-group">
          <Input
            type="text"
            name="username"
            label="Enter your username"
            value={this.state.username}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="form-group">
          <Input
            type="password"
            name="password"
            label="Enter your password"
            value={this.state.password}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
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
        <Button onClick={this.getLogin} label="Login" raised primary />
      </div>
    );
  }
}

LoginComponent.propTypes = {
  getLogin: PropTypes.func.isRequired
};

export default LoginComponent;
