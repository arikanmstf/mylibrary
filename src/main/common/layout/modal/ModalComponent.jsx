import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Button from 'react-toolbox/lib/button/Button';

import { Text } from 'common/layout';

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
  };

  render() {
    const { message, closeModal, onConfirm } = this.props;

    return (
      <Dialog
        active={message !== ''}
        onEscKeyDown={closeModal}
        onOverlayClick={closeModal}
      >
        <Text value={message} />
        {onConfirm ?
          <div>
            <Button onClick={closeModal} label="CANCEL" raised accent />
            <Button onClick={this.onConfirm} label="CONFIRM" raised primary />
          </div> :
          <Button onClick={closeModal} label="OK" raised primary />}
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
