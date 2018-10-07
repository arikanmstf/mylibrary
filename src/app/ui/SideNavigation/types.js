/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
export type SideNavigationProps = {
  updateListType: Function,
};

export type SideNavigationItem = {
  label: ?string,
  icon?: ?string,
  to?: string,
  onPress?: Function,
};
