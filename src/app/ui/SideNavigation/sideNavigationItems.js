// @flow
import {
  PROFILE,
  LOGOUT,
} from 'constants/routes/routeNames';
import { BOOKS_I_READ, MY_FAVORITES } from 'modules/publication/constants';

import type { SideNavigationProps } from './types';

export default [
  {
    label: 'HEADER_MENU_PROFILE',
    to: PROFILE,
    icon: 'settings',
  },
  {
    label: 'HEADER_MENU_MY_FAVORITES',
    icon: 'star',
    listType: MY_FAVORITES,
    onPress: ({ updateListType }: SideNavigationProps) => {
      updateListType(MY_FAVORITES);
    },
  },
  {
    label: 'HEADER_MENU_BOOKS_I_READ',
    icon: 'book',
    listType: BOOKS_I_READ,
    onPress: ({ updateListType }: SideNavigationProps) => {
      updateListType(BOOKS_I_READ);
    },
  },
  {
    label: 'HEADER_MENU_LOGOUT',
    to: LOGOUT,
    icon: 'log-out',
  },
];
