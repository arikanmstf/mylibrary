import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class ItemEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    this.props.getItemDetails(this.props.match.params[this.props.itemId]);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.item.title
    });
  }

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      this.saveForm();
    }
  }

  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
    const form = {
      [this.props.item_id]: this.props.item[this.props.item_id],
      title: this.state.title
    };
    this.props.updateItemDetails(form);
  }

  render() {
    const item = this.props.item;
    return item && (
      <div>
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
      </div>
    );
  }
}
ItemEditComponent.propTypes = {
  getItemDetails: PropTypes.func.isRequired,
  updateItemDetails: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  itemId: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired
};

export default ItemEditComponent;
