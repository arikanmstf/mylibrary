/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import type { Node } from 'react';
import type { LoaderProps } from './types';
import { mapStateToProps } from './actions';

const Loader = ({ visible, ...other }: LoaderProps): Node => {
  return (
    <Spinner
      {...other}
      visible={visible.length > 0}
    />
  );
};

export default connect(mapStateToProps)(Loader);
