import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserDetails } from '../../actions/ResolvedGetUserDetails';
import { updateUserDetails } from '../../actions/ResolvedSetAdminForm';

class AdminUsersEditPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      user_type: 1,
      email: '',
      display_name: '',
      login_name: '',
      ...props
    };

    this.onDispChange = this.onDispChange.bind(this);
    this.onMailChange = this.onMailChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);

    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    this.props.getUserDetails(this.state.userId);
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
      alert('You can not make user type higher than 9');
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
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
            <div className="item-light-title">
              <input value={this.state.login_name} onChange={this.onLoginChange} />
            </div>
            <div className="item-title">
              <input value={this.state.display_name} onChange={this.onDispChange} />
            </div>
            <div className="item-title">
              <input value={this.state.email} onChange={this.onMailChange} />
            </div>
            <div className="item-title">
              <input type="number" value={this.state.user_type} onChange={this.onTypeChange} />
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
  getUserDetails: PropTypes.func.isRequired,
  updateUserDetails: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (search) => dispatch(getUserDetails(search)),
    updateUserDetails: (form) => dispatch(updateUserDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersEditPage);
