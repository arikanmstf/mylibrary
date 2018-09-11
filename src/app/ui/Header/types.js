/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
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
  handleSubmit: Function,
  history: {
    goBack: Function, // TODO: common history type
  },
};

export type SideNavigationItem = {
  label: ?string,
  icon?: ?string,
  to: string,
};

export type SubmitSearchFormRequest = {
  page?: number,
  search?: string,
};

export const SEARCH_SUBMIT_TIMEOUT = 500;
