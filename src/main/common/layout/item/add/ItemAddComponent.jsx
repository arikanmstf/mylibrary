import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class ItemAddComponent extends Component {
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

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      this.saveForm();
    }
  }

  saveForm = () => {
    const form = {
      title: this.state.title
    };
    this.props.addItemDetails(form);
  }

  render() {
    return (
      <div className="item-details-page">
        <div className="item-details-container">
          <div className="item-info">
            <div className="item-title">
              <Input
                type="text"
                name="title"
                label="Title"
                value={this.state.title}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </div>
        </div>
        <Button onClick={this.saveForm} label="Save Form" raised primary />
      </div>);
  }
}
ItemAddComponent.propTypes = {
  addItemDetails: PropTypes.func.isRequired,
};

export default ItemAddComponent;
