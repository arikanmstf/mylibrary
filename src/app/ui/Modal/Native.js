/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Node } from 'react';
import { Modal as ModalNative, View } from 'react-native';
import { Button, Text } from 'ui/native';
import t from 'helpers/i18n/Translate';
import type { ModalProps } from './types';

const Modal = ({ onClose, open, text }: ModalProps): Node => {
  return (
    <ModalNative
      onRequestClose={onClose}
      visible={!!open}
    >
      <View style={{ marginTop: 22 }}>
        <Text>
          {text}
        </Text>
        {onClose ? (
          <Button
            primary
            raised
            text={t.get('MODAL_CLOSE')}
            onClick={onClose}
          />
        ) : null }
      </View>
    </ModalNative>
  );
};

export default Modal;
