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
  handleSubmit?: Function,
  history?: RouterHistory,
  navigation?: StackNavigator,
};

export type HeaderState = {
  isSearchFocus: boolean,
}

export type SubmitSearchFormRequest = {
  page?: number,
  search?: string,
  type?: 'BOOKS_I_READ' | 'MY_FAVORITES' | '',
};

export const SEARCH_SUBMIT_TIMEOUT = 500;
