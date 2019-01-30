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
`;

const Screen = (props: ScreenProps) => {
  const { style, center, ...other } = props;
  const centerStyle = center ? { justifyContent: 'center', alignItems: 'center' } : {};
  const mergedStyles = {
    ...defaultStyle,
    ...centerStyle,
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
