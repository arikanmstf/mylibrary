// @flow
import { Node } from 'react';

export type ScreenProps = {
  children?: Node,
  style?: Object,
  center?: boolean,
  isDrawerOpen?: boolean,
  hideDrawer?: Function,
};
