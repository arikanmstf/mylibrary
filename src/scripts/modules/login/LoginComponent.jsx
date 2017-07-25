import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputText from 'common/input/InputText';
import InputPassword from 'common/input/InputPassword';

import ReactLogo from 'img/react-logo.png';

class LoginComponent extends Component {

	constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

	getLogin() {
		this.props.getLogin(this.state);
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
						<InputText
							onChange={(e) => this.setState({ username: e })}
							placeholder="Enter your username"
						/>
					</div>
					<div className="form-group">
						<InputPassword
							onChange={(e) => this.setState({ password: e })}
							placeholder="Enter your password"
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
