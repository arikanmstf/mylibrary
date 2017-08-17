import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminListsAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
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
AdminListsAddComponent.propTypes = {
  addListDetails: PropTypes.func.isRequired
};

export default AdminListsAddComponent;
