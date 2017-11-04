import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Button from 'react-toolbox/lib/button/Button';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message
    };
  }
  onConfirm = () => {
    this.props.onConfirm();
    this.props.closeModal();
  }
  render() {
    return (
      <Dialog
        active={this.props.message !== ''}
        onEscKeyDown={this.props.closeModal}
        onOverlayClick={this.props.closeModal}
      >
        <p>{this.props.message}</p>
        {this.props.onConfirm ?
          <div>
            <Button onClick={this.props.closeModal} label="CANCEL" raised danger accent />
            <Button style={floatRight} onClick={this.onConfirm} label="CONFIRM" raised primary />
          </div> :
          <Button onClick={this.props.closeModal} label="OK" raised primary />}
      </Dialog>
    );
  }
}
ModalComponent.propTypes = {
  message: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  onConfirm: PropTypes.func
};

ModalComponent.defaultProps = {
  onConfirm: null
};

export default ModalComponent;
