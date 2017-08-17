import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import axios from 'axios';
import { API } from 'common/Config';

const UPLOAD_STATES = {
  WAITING: 0,
  IN_PROGRESS: 1,
  DONE: 2,
  FAILED: -1
};

class InputUpload extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uploadState: UPLOAD_STATES.WAITING
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
    this.setState({ uploadState: UPLOAD_STATES.IN_PROGRESS });
    axios.put(url, file)
      .then((res) => {
        this.setState({ uploadState: UPLOAD_STATES.DONE });
        this.props.onUpload(res.data);
      })
      .catch(() => {
        this.setState({ uploadState: UPLOAD_STATES.FAILED });
      });
  }

  renderUploadState() {
    let result = null;
    switch (this.state.uploadState) {
      case UPLOAD_STATES.WAITING:
        result = <p>{this.props.title}</p>;
        break;
      case UPLOAD_STATES.IN_PROGRESS:
        result = <p>{'Uploading...'}</p>;
        break;
      case UPLOAD_STATES.DONE:
        result = <p>{'Done.'}</p>;
        break;
      case UPLOAD_STATES.FAILED:
        result = <p>{'Failed.'}</p>;
        break;
      default:
        result = null;
    }
    return result;
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
            {this.renderUploadState()}
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
