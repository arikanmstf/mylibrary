import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class AdminTagsAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }
  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
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
              <Input
                type="text"
                name="title"
                label="Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <Button onClick={this.saveForm} label="Save Form" raised primary />
      </div>
    );
  }
}
AdminTagsAddComponent.propTypes = {
  addTagDetails: PropTypes.func.isRequired,
};

export default AdminTagsAddComponent;
