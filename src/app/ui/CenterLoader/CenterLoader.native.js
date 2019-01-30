/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { Body } from 'native-base';
import { Image } from 'ui/native';
import Loading from 'assets/images/loading.gif';
import { mapStateToProps } from './actions';

import type { CenterLoaderProps } from './types';

const CenterLoader = ({ isVisible }: CenterLoaderProps): Node => {
  return isVisible ? (
    <Body style={{ textAlign: 'center' }}>
      <Image source={Loading} style={{ outline: 'none', width: 25, height: 25 }} />
    </Body>
  ) : null;
};

export default connect(mapStateToProps)(CenterLoader);
