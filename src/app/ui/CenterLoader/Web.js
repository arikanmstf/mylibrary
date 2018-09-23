/**
 * Web Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Node } from 'react';
import { connect } from 'react-redux';
import { Image } from 'ui';
import Loading from 'assets/images/loading.gif';
import { mapStateToProps } from './actions';

import type { CenterLoaderProps } from './types';

const CenterLoader = ({ isVisible }: CenterLoaderProps): Node => {
  return isVisible ? (
    <div style={{ textAlign: 'center' }}>
      <Image source={Loading} style={{ outline: 'none', width: 25, height: 25 }} />
    </div>
  ) : null;
};

export default connect(mapStateToProps)(CenterLoader);
