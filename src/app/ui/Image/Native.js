// @flow
import React from 'react';
import { Image as NativeImage } from 'react-native';
import { Link } from 'react-router-native';
import type { ImageProps } from './types';

class Image extends React.PureComponent<ImageProps> {
  renderImage() {
    const {
      to,
      ...rest
    } = this.props;

    return (
      <NativeImage
        {...rest}
      />
    );
  }

  render() {
    const {
      to,
    } = this.props;

    return to ? (<Link to={to}>{this.renderImage()}</Link>) : this.renderImage();
  }
}

export default Image;
