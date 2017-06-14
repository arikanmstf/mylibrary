import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTagDetails } from '../../actions/ResolvedGetTagDetails';
import { updateTagDetails } from '../../actions/ResolvedSetAdminForm';

class AdminTagsEditPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: '',
      ...props
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    this.props.getTagDetails(this.state.tagId);
  }

  componentWillReceiveProps(nextProps) {
		this.setState({
      title: nextProps.tag.title
    });
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
      tag_id: this.props.tag.tag_id,
      title: this.state.title
    };
    this.props.updateTagDetails(form);
  }

	render() {
		const tag = this.props.tag;
		return tag && (
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
AdminTagsEditPage.propTypes = {
  getTagDetails: PropTypes.func.isRequired,
  updateTagDetails: PropTypes.func.isRequired,
	tag: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		tag: state.tag
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTagDetails: (search) => dispatch(getTagDetails(search)),
    updateTagDetails: (form) => dispatch(updateTagDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminTagsEditPage);
