/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import WebTextField from '@material-ui/core/TextField';

import type { Node } from 'react';
import type { TextFieldProps } from './types';
import defaultStyle from './style.json';

const TextField = (props: TextFieldProps): Node => {
  const { style, ...other } = props;
  const mergedStyle = {
    ...defaultStyle,
    width: '100%',
    ...style,
  };

  return (
    <WebTextField
      style={mergedStyle}
      {...other}
    />
  );
};

export default TextField;
