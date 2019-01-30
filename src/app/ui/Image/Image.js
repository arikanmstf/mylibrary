// @flow
import React, { PureComponent } from 'react';
import { Link } from 'ui';

import type { ImageProps } from './types';

class Image extends PureComponent<ImageProps> {
  renderImage() {
    const {
      source,
      alt,
      ...other
    } = this.props;

    return (
      <img
        src={source.uri || source}
        alt={alt || 'image'}
        {...other}
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
