// @flow
import React from 'react';
import type { ImageProps } from './types';

const Image = (props: ImageProps) => {
  const { source, alt, ...other } = props;
  return (
    <img
      src={source.uri || source}
      alt={alt || 'image'}
      {...other}
    />
  );
};

export default Image;
