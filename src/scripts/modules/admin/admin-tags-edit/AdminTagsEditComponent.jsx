import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class AdminTagsEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    this.props.getTagDetails(this.props.match.params.tagId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.tag.title
    });
  }

  saveForm = () => {
    const form = {
      tag_id: this.props.tag.tag_id,
      title: this.state.title
    };
    this.props.updateTagDetails(form);
  }

  render() {
    const tag = this.props.tag;
    return tag && (
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
AdminTagsEditComponent.propTypes = {
  getTagDetails: PropTypes.func.isRequired,
  updateTagDetails: PropTypes.func.isRequired,
  tag: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default AdminTagsEditComponent;
