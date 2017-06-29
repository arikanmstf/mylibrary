import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProfileDetails, updateProfileDetails } from './ProfilePageActions';

class ProfilePage extends Component {

	constructor(props) {
    super(props);

    this.state = {
      email: '',
      display_name: '',
      login_name: '',
      password: '',
      ...props
    };

    this.onDispChange = this.onDispChange.bind(this);
    this.onMailChange = this.onMailChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);

    this.saveForm = this.saveForm.bind(this);
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
  onPassChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  saveForm() {
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
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
            <div className="item-light-title">
              <span>{this.state.login_name}</span>
            </div>
            <div className="item-title">
              <input value={this.state.display_name} onChange={this.onDispChange} placeholder="Display name" />
            </div>
            <div className="item-title">
              <input value={this.state.email} onChange={this.onMailChange} placeholder="Email" />
            </div>
            <div className="item-title">
              <input type="Password" value={this.state.password} onChange={this.onPassChange} placeholder="New Password" />
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
ProfilePage.propTypes = {
  getProfileDetails: PropTypes.func.isRequired,
  updateProfileDetails: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		profile: state.profile
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileDetails: () => dispatch(getProfileDetails()),
    updateProfileDetails: (form) => dispatch(updateProfileDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
