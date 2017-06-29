import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputText from 'common/input/InputText';
import InputPassword from 'common/input/InputPassword';
import { getLogin } from './LoginActions';

class LoginPage extends Component {

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
						src="./assets/img/react-logo.png"
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

LoginPage.propTypes = {
  getLogin: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		username: state.username,
		password: state.password
	};
}

const mapDispatchToProps = (dispatch) => {
  return { getLogin: (data) => dispatch(getLogin(data)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
