// @flow
import React, { PureComponent } from 'react';
import { Image as NativeImage } from 'react-native';
import { Link } from 'ui/native';
import NotFound from 'assets/images/0.jpg';

import type { ImageProps } from './types';

class Image extends PureComponent<ImageProps> {
  state = {
    hasError: false,
  };

  handleError = () => {
    const { onError } = this.props;
    this.setState({
      hasError: true,
    });

    if (onError) {
      onError();
    }
  };

  renderImage() {
    const {
      to,
      source,
      ...rest
    } = this.props;
    const { hasError } = this.state;

    return (
      <NativeImage
        onError={this.handleError}
        source={hasError ? NotFound : source}
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
