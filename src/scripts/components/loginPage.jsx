import React , { Component } from 'react';
import { connect } from 'react-redux';
import InputText from "../components/input/inputText";
import InputPassword from "../components/input/InputPassword";

export default class LoginPage extends Component {

	render() {
		return(
				<div className="login-page">
					<div>
						<InputText placeholder="Enter your username" />
					</div>
					<div>
						<InputPassword placeholder="Enter your password" />
					</div>
				</div>
			)
	}
}
