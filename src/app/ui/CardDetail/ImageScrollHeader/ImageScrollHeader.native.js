/**
 * Native Component Template By => create-module script
 * @version 1.2.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import Image from 'ui/Image/Image';

import type { ImageScrollHeaderProps } from './types';

class ImageScrollHeader extends PureComponent<ImageScrollHeaderProps> {
  handleError = () => {
    const { onError } = this.props;
    if (onError) {
      onError();
    }
  };

  render() {
    const { uri, maxHeight } = this.props;

    return (
      <Image
        source={{ uri }}
        style={{ height: maxHeight, width: Dimensions.get('window').width }}
        onError={this.handleError}
      />
    );
  }
}

export default ImageScrollHeader;
