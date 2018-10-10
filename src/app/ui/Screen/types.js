// @flow
import type { Node } from 'react';

export type ScreenProps = {
  children?: Node,
  style?: Object,
  center?: boolean,
  isDrawerOpen?: boolean,
  hideDrawer?: Function,
};
