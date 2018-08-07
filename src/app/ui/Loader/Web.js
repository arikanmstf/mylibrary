/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ModalDiv from '@material-ui/core/Modal';
import Logo from 'assets/images/loading.gif';
import { Image } from 'ui';
import type { Node } from 'react';
import type { LoaderProps } from './types';
import { mapStateToProps } from './actions';

const Container = styled.div`
display: flex;
outline: none;
align-items: center;
justify-content: center;
height: 100%;
`;

const Modal = ({ isVisible, dispatch, ...other }: LoaderProps): Node => {
  return (
    <ModalDiv
      {...other}
      open={isVisible}
    >
      <Container>
        <Image source={Logo} style={{ outline: 'none', width: 35, height: 35 }} />
      </Container>
    </ModalDiv>
  );
};

export default connect(mapStateToProps)(Modal);
