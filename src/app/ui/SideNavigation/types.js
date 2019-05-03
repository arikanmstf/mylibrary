/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { RouterHistory } from 'react-router';
import type { StackNavigator } from 'react-navigation';

export type SideNavigationProps = {
  updateListType: Function,
  history?: RouterHistory,
  navigation?: StackNavigator,
  hideDrawerAsync: Function,
};

export type SideNavigationItem = {
  label: ?string,
  icon?: ?string,
  to?: string,
  onPress?: Function,
  listType?: string,
};
