import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminListsEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      is_public: false
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
    this.onPublicChange = this.onPublicChange.bind(this);
  }

  componentDidMount() {
    this.props.getListDetails(this.props.match.params.listId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.list.title,
      is_public: nextProps.list.is_public > 0
    });
  }
  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  onPublicChange() {
    const is_public = !this.state.is_public; // eslint-disable-line camelcase
    this.setState({
      is_public
    });
  }

  saveForm() {
    const form = {
      list_id: this.props.list.list_id,
      title: this.state.title,
      is_public: this.state.is_public ? 1 : 0
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
            <div className="item-title">
							Public:
              <input type="checkbox" checked={this.state.is_public} onChange={this.onPublicChange} />
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
