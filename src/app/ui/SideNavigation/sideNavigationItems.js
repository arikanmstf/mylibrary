// @flow
import {
  HOME,
  PROFILE,
  LOGOUT,
} from 'constants/routes/routeNames';
import { BOOKS_I_READ, MY_FAVORITES } from 'modules/publication/constants';
import {
  ICON_BOOK, ICON_FAVORITE, ICON_LOGOUT, ICON_USER,
} from 'constants/theme/icons';

import type { SideNavigationProps } from './types';

export default [
  {
    to: PROFILE,
    label: 'HEADER_MENU_PROFILE',
    icon: ICON_USER,
  },
  {
    to: HOME,
    label: 'HEADER_MENU_MY_FAVORITES',
    icon: ICON_FAVORITE,
    listType: MY_FAVORITES,
    onPress: ({ updateListType }: SideNavigationProps) => {
      updateListType(MY_FAVORITES);
    },
  },
  {
    to: HOME,
    label: 'HEADER_MENU_BOOKS_I_READ',
    icon: ICON_BOOK,
    listType: BOOKS_I_READ,
    onPress: ({ updateListType }: SideNavigationProps) => {
      updateListType(BOOKS_I_READ);
    },
  },
  {
    to: LOGOUT,
    label: 'HEADER_MENU_LOGOUT',
    icon: ICON_LOGOUT,
  },
];
