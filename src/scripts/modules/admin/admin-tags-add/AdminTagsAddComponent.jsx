import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminTagsAddComponent extends Component {
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
    this.props.addTagDetails(form);
  }

  render() {
    return true && (
      <div className="item-details-page   ">
        <div className="item-details-container">
          <div className="  item-info">
            <div className="item-title">
              <input value={this.state.title} onChange={this.onTitleChange} />
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
AdminTagsAddComponent.propTypes = {
  addTagDetails: PropTypes.func.isRequired,
};

export default AdminTagsAddComponent;
