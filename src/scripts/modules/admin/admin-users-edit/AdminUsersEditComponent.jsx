import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminUsersEditComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_type: 1,
      email: '',
      display_name: '',
      login_name: ''
    };

    this.onDispChange = this.onDispChange.bind(this);
    this.onMailChange = this.onMailChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    this.props.getUserDetails(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user_id: nextProps.user.user_id,
      display_name: nextProps.user.display_name,
      login_name: nextProps.user.login_name,
      email: nextProps.user.email,
      user_type: nextProps.user.user_type
    });
  }
  onDispChange(event) {
    this.setState({
      display_name: event.target.value
    });
  }
  onMailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  onTypeChange(event) {
    this.setState({
      user_type: event.target.value
    });
  }
  onLoginChange(event) {
    this.setState({
      login_name: event.target.value
    });
  }

  saveForm() {
    if (this.state.type > 9) {
      return false;
    }
    const form = {
      user_id: this.props.user.user_id,
      display_name: this.state.display_name,
      login_name: this.state.login_name,
      email: this.state.email,
      user_type: this.state.user_type
    };
    this.props.updateUserDetails(form);
    return true;
  }

  render() {
    const user = this.props.user;
    return user && (
      <div className="item-details-page   ">
        <div className="item-details-container">
          <div className="  item-info">
            <div className="item-light-title">
              <input value={this.state.login_name} onChange={this.onLoginChange} placeholder="Login name" />
            </div>
            <div className="item-title">
              <input value={this.state.display_name} onChange={this.onDispChange} placeholder="Display name" />
            </div>
            <div className="item-title">
              <input value={this.state.email} onChange={this.onMailChange} placeholder="Email" />
            </div>
            <div className="item-title">
              <input type="number" value={this.state.user_type} onChange={this.onTypeChange} placeholder="User type" />
            </div>
          </div>
          <div className="clearfix" />
          <div >
            <button className="btn btn-primary" onClick={this.saveForm}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}
AdminUsersEditComponent.propTypes = {
  getUserDetails: PropTypes.func.isRequired,
  updateUserDetails: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default AdminUsersEditComponent;
