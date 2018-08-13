/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
export type HeaderProps = {
  style?: Object,
  back?: ?boolean,
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
};

export type SideNavigationItem = {
  label: ?string,
  icon?: ?string,
  to?: ?string,
};
