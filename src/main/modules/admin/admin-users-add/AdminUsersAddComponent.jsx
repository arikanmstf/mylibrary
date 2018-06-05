import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class AdminUsersAddComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_type: 1,
      email: '',
      display_name: '',
      login_name: '',
      password: ''
    };
  }

  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
    if (this.state.type > 9) {
      return false;
    }
    const form = {
      display_name: this.state.display_name,
      login_name: this.state.login_name,
      email: this.state.email,
      user_type: this.state.user_type,
      password: this.state.password,
    };
    this.props.addUserDetails(form);
    return true;
  }

  render() {
    return true && (
      <div className="item-details-page   ">
        <div className="item-details-container">
          <div className="  item-info">
            <div className="item-light-title">
              <Input
                type="text"
                name="login_name"
                label="Login Name"
                value={this.state.login_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="item-title">
              <Input
                type="text"
                name="display_name"
                label="Display Name"
                value={this.state.display_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="item-title">
              <Input
                type="text"
                name="email"
                label="E-mail"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="item-title">
              <Input
                type="number"
                name="user_type"
                label="User Type"
                value={this.state.user_type}
                onChange={this.handleChange}
              />
            </div>
            <div className="item-title">
              <Input
                type="text"
                name="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <Button onClick={this.saveForm} label="Save Form" raised primary />
      </div>
    );
  }
}
AdminUsersAddComponent.propTypes = {
  addUserDetails: PropTypes.func.isRequired
};

export default AdminUsersAddComponent;
