import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';

class AdminListsEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      is_public: false
    };
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
  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
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
            <div className="item-title">
              <Checkbox
                label="Public"
                name="is_public"
                checked={this.state.is_public}
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
AdminListsEditComponent.propTypes = {
  getListDetails: PropTypes.func.isRequired,
  updateListDetails: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default AdminListsEditComponent;
