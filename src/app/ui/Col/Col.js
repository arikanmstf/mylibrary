/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';

import type { Node } from 'react';
import type { ColProps } from './types';
import defaultStyle from './style.json';

const Col = (props: ColProps): Node => {
  const { style, ...other } = props;
  const mergedStyle = {
    ...defaultStyle,
    ...style,
  };

  return (
    <div
      style={mergedStyle}
      {...other}
    />
  );
};

export default Col;
