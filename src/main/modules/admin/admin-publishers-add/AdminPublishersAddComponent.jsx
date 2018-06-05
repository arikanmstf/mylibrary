import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

class AdminPublishersAddComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      phone: '',
      adr: '',
      ...props
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
      adr: this.state.adr,
      phone_no: this.state.phone
    };
    this.props.addPublisherDetails(form);
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
                value={this.state.title}
                onChange={this.handleChange}
                label="Publisher Name"
              />
            </div>
            <div className="item-small-title">
              <Input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.onPhoneChange}
                label="Phone Number"
              />
            </div>
            <div className="item-small-title">
              <Input
                type="text"
                name="adr"
                value={this.state.adr}
                onChange={this.onAdrChange}
                label="Address"
              />
            </div>
          </div>
        </div>
        <Button onClick={this.saveForm} label="Save Form" raised primary />
      </div>
    );
  }
}
AdminPublishersAddComponent.propTypes = {
  addPublisherDetails: PropTypes.func.isRequired
};

export default AdminPublishersAddComponent;
