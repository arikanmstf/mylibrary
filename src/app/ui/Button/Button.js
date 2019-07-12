// @flow
import React from 'react';
import WebButton from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import type { Node } from 'react';
import type { ButtonProps } from './types';

const Button = (props: ButtonProps): Node => {
  const {
    text, primary, raised, style, to, color, ...other
  } = props;
  const c = primary ? 'primary' : color;
  const contained = raised ? 'contained' : undefined;
  const mergedStyle = {
    width: '100%',
    ...style,
  };

  return (
    <WebButton
      color={c}
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
