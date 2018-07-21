// @flow
import React from 'react';
import styled from 'styled-components';
import type { ScreenProps } from './types';
import defaultStyle from './style.json';

const Div = styled.div`
font-family: Baskerville;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;

const Screen = (props: ScreenProps) => {
  const { style, ...other } = props;
  const mergedStyles = {
    ...defaultStyle,
    ...style,
  };

  return (
    <Div
      style={mergedStyles}
      {...other}
    />
  );
};

export default Screen;
