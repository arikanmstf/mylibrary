import React , { Component } from 'react';
import { connect } from 'react-redux';
import InputText from "../components/input/inputText";
import InputPassword from "../components/input/InputPassword";

export default class LoginPage extends Component {

	constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

	makeLogin() {
		console.log(this)
	}
	render() {
		let self = this;
		return(
				<div className="login-page">
					<img
						src="./assets/img/react-logo.png"
						width="180"
						height="180"/>
					<div className="form-group">
						<InputText
							onChange={(e)=>this.setState({username:e})}
							placeholder="Enter your username" />
					</div>
					<div className="form-group">
						<InputPassword
							onChange={(e)=>this.setState({password:e})}
							placeholder="Enter your password" />
					</div>
					<div className="form-group">
						<div className="alert alert-info">
							Username : guest
						</div>
						<div className="alert alert-info">
							Password : 123
						</div>
					</div>
					<button
						className="btn btn-info btn-block"
						onClick={ () => this.makeLogin() }>
						Login
					</button>
				</div>
			)
	}
}
