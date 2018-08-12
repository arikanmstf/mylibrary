// @flow
import * as React from 'react';

export type ScreenProps = {
  children?: React.Node,
  style?: Object,
  center?: boolean,
  isDrawerOpen?: boolean,
  hideDrawer?: Function,
};
