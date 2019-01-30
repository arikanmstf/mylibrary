// @flow
import React from 'react';
import type { TextProps } from './types';

const Text = (props: TextProps) => {
  const { children, className } = props;
  return (
    <span className={className}>
      {children}
    </span>
  );
};

export default Text;
