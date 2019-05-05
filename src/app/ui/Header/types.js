/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */
// @flow
import type { RouterHistory } from 'react-router';
import type { StackNavigator } from 'react-navigation';

export type HeaderProps = {
  style?: Object,
  title?: string,
  classes?: {
    container: string,
    image: string,
    search: string,
    flex: string,
    list: string,
  },
  isDrawerOpen?: ?boolean,
  showDrawer?: Function,
  hideDrawer?: Function,
  toggleDrawer?: Function,
  handleSubmit?: Function,
  history?: RouterHistory,
  home?: ?boolean,
  navigation?: StackNavigator,
};
