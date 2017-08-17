import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminWritersEditComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
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
      writer_id: this.props.writer.writer_id,
      title: this.state.title,
      description: this.state.description
    };
    this.props.updateWriterDetails(form);
  }

  render() {
    const writer = this.props.writer;
    return writer && (
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
            <div className="item-title">
              <input value={this.state.title} onChange={this.onTitleChange} />
            </div>
            <p className="item-description">
							<textarea onChange={this.onDescChange} value={this.state.description} />
						</p>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" >
            <button className="btn btn-primary" onClick={this.saveForm}>Save</button>
					</div>
				</div>
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
