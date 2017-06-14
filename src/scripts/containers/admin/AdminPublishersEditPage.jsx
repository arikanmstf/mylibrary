import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPublisherDetails } from '../../actions/ResolvedGetPublisherDetails';
import { updatePublisherDetails } from '../../actions/ResolvedSetAdminForm';

class AdminPublishersEditPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: '',
      phone: '',
      adr: '',
      ...props
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onAdrChange = this.onAdrChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    this.props.getPublisherDetails(this.state.publisherId);
  }

  componentWillReceiveProps(nextProps) {
		this.setState({
      title: nextProps.publisher.name,
      phone: nextProps.publisher.phone_no,
      adr: nextProps.publisher.address
    });
	}
  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  onPhoneChange(event) {
    this.setState({
      phone: event.target.value
    });
  }
  onAdrChange(event) {
    this.setState({
      adr: event.target.value
    });
  }

  saveForm() {
    const form = {
      publisher_id: this.props.publisher.publisher_id,
      title: this.state.title,
      adr: this.state.adr,
      phone_no: this.state.phone
    };
    this.props.updatePublisherDetails(form);
  }

	render() {
		const publisher = this.props.publisher;
		return publisher && (
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
            <div className="item-title">
              <input value={this.state.title} onChange={this.onTitleChange} />
            </div>
            <div className="item-small-title">
              <span>Phone No: </span>
              <input value={this.state.phone} onChange={this.onPhoneChange} />
            </div>
            <div className="item-small-title">
              <span>Address: </span>
              <input value={this.state.adr} onChange={this.onAdrChange} />
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
AdminPublishersEditPage.propTypes = {
  getPublisherDetails: PropTypes.func.isRequired,
  updatePublisherDetails: PropTypes.func.isRequired,
	publisher: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		publisher: state.publisher
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPublisherDetails: (search) => dispatch(getPublisherDetails(search)),
    updatePublisherDetails: (form) => dispatch(updatePublisherDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublishersEditPage);
