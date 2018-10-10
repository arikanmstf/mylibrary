/**
 * Web Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Node } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ModalWeb from '@material-ui/core/Modal';
import { white } from 'constants/theme/color';
import t from 'helpers/i18n/Translate';
import { Button } from 'ui';

import type { ModalProps } from './types';

const ModalStyled = styled(ModalWeb)`
display: flex;
align-items: center;
justify-content: center;
`;

const ModalWrapperStyled = styled.div`
background-color: ${white};
width: 80%;
padding: 15px;
word-break: break-word;
`;

const ModalButtonStyled = styled(Button)`
max-width: 200px;
`;

const Modal = ({ onClose, open, text }: ModalProps): Node => {
  return (
    <ModalStyled
      onClose={onClose}
      open={!!open}
    >
      <ModalWrapperStyled>
        <Typography>
          {text}
        </Typography>
        {onClose ? (
          <ModalButtonStyled
            primary
            raised
            text={t.get('GENERAL_CLOSE')}
            onClick={onClose}
          />
        ) : null }
      </ModalWrapperStyled>
    </ModalStyled>
  );
};

export default Modal;
