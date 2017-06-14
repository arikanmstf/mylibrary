import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUserDetails } from '../../actions/ResolvedSetAdminForm';

class AdminUsersEditPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      user_type: 1,
      email: '',
      display_name: '',
      login_name: '',
      password: '',
      ...props
    };

    this.onDispChange = this.onDispChange.bind(this);
    this.onMailChange = this.onMailChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);

    this.saveForm = this.saveForm.bind(this);
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
  onPassChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  saveForm() {
    if (this.state.type > 9) {
      alert('You can not make user type higher than 9');
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
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
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
              <input type="number" value={this.state.user_type} onChange={this.onTypeChange} placeholder="User Type" />
            </div>
            <div className="item-title">
              <input value={this.state.password} onChange={this.onPassChange} placeholder="Password" />
            </div>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" >
            <button className="btn btn-primary" onClick={this.saveForm}>Save</button>
					</div>
				</div>
			</div>
		);
	}
}
AdminUsersEditPage.propTypes = {
  addUserDetails: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserDetails: (form) => dispatch(addUserDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(AdminUsersEditPage);
