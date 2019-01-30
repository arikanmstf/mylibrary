// @flow
import React from 'react';
import WebButton from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import type { Node } from 'react';
import type { ButtonProps } from './types';

const Button = (props: ButtonProps): Node => {
  const {
    text, primary, raised, style, to, ...other
  } = props;
  const color = primary ? 'primary' : undefined;
  const contained = raised ? 'contained' : undefined;
  const mergedStyle = {
    width: '100%',
    ...style,
  };

  return (
    <WebButton
      color={color}
      variant={contained}
      style={mergedStyle}
      component={to ? Link : undefined}
      to={to}
      {...other}
    >
      {text}
    </WebButton>
  );
};

export default Button;
