import React , { Component } from 'react';
import { connect } from 'react-redux';
import InputText from "../components/input/inputText";
import InputPassword from "../components/input/InputPassword";

export default class LoginPage extends Component {

	render() {
		return(
				<div className="login-page">
					<img
						src="./assets/img/react-logo.png"
						width="180"
						height="180"/>
					<div className="form-group">
						<InputText placeholder="Enter your username" />
					</div>
					<div className="form-group">
						<InputPassword placeholder="Enter your password" />
					</div>
					<div className="form-group">
						<div className="alert alert-info">
							Username : guest
						</div>
						<div className="alert alert-info">
							Password : 123
						</div>
					</div>
				</div>
			)
	}
}
