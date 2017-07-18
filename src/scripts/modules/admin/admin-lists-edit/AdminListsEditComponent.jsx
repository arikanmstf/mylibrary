import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminListsEditComponent extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    this.props.getListDetails(this.props.match.params.listId);
  }

  componentWillReceiveProps(nextProps) {
		this.setState({
      title: nextProps.list.title
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
      list_id: this.props.list.list_id,
      title: this.state.title
    };
    this.props.updateListDetails(form);
  }

	render() {
		const list = this.props.list;
		return list && (
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
AdminListsEditComponent.propTypes = {
  getListDetails: PropTypes.func.isRequired,
  updateListDetails: PropTypes.func.isRequired,
	list: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};

export default AdminListsEditComponent;
