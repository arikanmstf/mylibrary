import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addListDetails } from '../AdminActions';

class AdminListsAddPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: '',
      ...props
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  onDescChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  saveForm() {
    const form = {
      title: this.state.title
    };
    this.props.addListDetails(form);
  }

	render() {
		return true && (
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
            <div className="item-title">
              <input value={this.state.title} onChange={this.onTitleChange} />
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
AdminListsAddPage.propTypes = {
  addListDetails: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListDetails: (form) => dispatch(addListDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(AdminListsAddPage);
