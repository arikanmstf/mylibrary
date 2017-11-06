import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class ProfileComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      display_name: '',
      login_name: '',
      password: ''
    };
  }

  componentDidMount() {
    this.props.getProfileDetails();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      user_id: nextProps.profile.user_id,
      display_name: nextProps.profile.display_name,
      login_name: nextProps.profile.login_name,
      email: nextProps.profile.email
    });
  }

  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
    const form = {
      user_id: this.props.profile.user_id,
      display_name: this.state.display_name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.updateProfileDetails(form);
    return true;
  }

  render() {
    const profile = this.props.profile;
    return profile && (
      <div className="item-details-page   ">
        <div className="item-details-container">
          <div className="  item-info">
            <div className="item-light-title">
              <span>{this.state.login_name}</span>
            </div>
            <div className="item-title">
              <Input
                type="text"
                name="display_name"
                value={this.state.display_name}
                label="Display Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="item-title">
              <Input
                type="text"
                name="email"
                value={this.state.email}
                label="E-mail"
                onChange={this.handleChange}
              />
            </div>
            <div className="item-title">
              <Input
                type="password"
                name="password"
                value={this.state.password}
                label="New Password"
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
ProfileComponent.propTypes = {
  getProfileDetails: PropTypes.func.isRequired,
  updateProfileDetails: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

export default ProfileComponent;
