import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import axios from 'axios';
import { API } from 'common/Config';

class InputUpload extends Component {

  constructor(props) {
    super(props);

    this.state = {
      file_uploaded: false
    };
  }

  onDropFile(acceptedFiles, rejectedFiles) {
    if (rejectedFiles && rejectedFiles.length > 0) {
      alert('Your file has been rejected.'); // eslint-disable-line no-alert
    } else if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const ext = file.name.split('.').slice(-1)[0];
      this.upload(`${API.uploadFile}?ext=${ext}`, file);
    }
  }
  upload(url, file) {
    axios.put(url, file)
      .then((res) => {
        this.setState({ file_uploaded: true });
        this.props.onUpload(res.data);
      });
  }

	render() {
		return (
			<div className="input-upload">
        <div className="upload-container">
          <Dropzone
            multiple={false}
            accept={this.props.accept}
            onDrop={(e, f) => this.onDropFile(e, f)}
          >
            { this.state.file_uploaded ?
              <p>Uploaded</p> :
              <p>{this.props.title}</p>
            }
          </Dropzone>
        </div>
      </div>
		);
	}
}
InputUpload.propTypes = {
  accept: PropTypes.string,
  title: PropTypes.string,
  onUpload: PropTypes.func.isRequired
};
InputUpload.defaultProps = {
  accept: '',
  title: 'Upload a file'
};

export default InputUpload;
