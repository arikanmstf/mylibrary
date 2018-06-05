import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

class AdminPublishersEditComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      phone: '',
      adr: ''
    };
  }

  componentDidMount() {
    this.props.getPublisherDetails(this.props.match.params.publisherId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.publisher.name || '',
      phone: nextProps.publisher.phone_no || '',
      adr: nextProps.publisher.address || ''
    });
  }
  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
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
                onChange={this.handleChange}
                label="Phone Number"
              />
            </div>
            <div className="item-small-title">
              <Input
                type="text"
                name="adr"
                value={this.state.adr}
                onChange={this.handleChange}
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
AdminPublishersEditComponent.propTypes = {
  getPublisherDetails: PropTypes.func.isRequired,
  updatePublisherDetails: PropTypes.func.isRequired,
  publisher: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default AdminPublishersEditComponent;
