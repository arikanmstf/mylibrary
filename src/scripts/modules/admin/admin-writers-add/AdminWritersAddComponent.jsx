import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

class AdminWritersAddComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
    const form = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.addWriterDetails(form);
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
                label="Writer Name"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <Input
              type="text"
              name="description"
              label="Writer Details"
              value={this.state.description}
              onChange={this.handleChange}
              multiline
            />
          </div>
        </div>
        <Button onClick={this.saveForm} label="Save Form" raised primary />
      </div>
    );
  }
}
AdminWritersAddComponent.propTypes = {
  addWriterDetails: PropTypes.func.isRequired
};

export default AdminWritersAddComponent;
