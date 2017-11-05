import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

class AdminWritersEditComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  componentDidMount() {
    this.props.getWriterDetails(this.props.match.params.writerId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.writer.full_name,
      description: nextProps.writer.description
    });
  }
  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
    const form = {
      writer_id: this.props.writer.writer_id,
      title: this.state.title,
      description: this.state.description
    };
    this.props.updateWriterDetails(form);
  }

  render() {
    const writer = this.props.writer;
    return writer && (
      <div className="item-details-page">
        <div className="item-details-container">
          <div className="item-info">
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
              multiline
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <Button onClick={this.saveForm} label="Save Form" raised primary />
      </div>
    );
  }
}
AdminWritersEditComponent.propTypes = {
  getWriterDetails: PropTypes.func.isRequired,
  updateWriterDetails: PropTypes.func.isRequired,
  writer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default AdminWritersEditComponent;
