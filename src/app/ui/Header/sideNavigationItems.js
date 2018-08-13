// @flow
import {
  PROFILE,
  FAVORITES,
  BOOKS_I_READ,
  LOGOUT,
} from 'constants/routes/routeNames';

export default [
  {
    label: 'HEADER_MENU_PROFILE',
    to: PROFILE,
    icon: 'settings',
  },
  {
    label: 'HEADER_MENU_FAVORITES',
    to: FAVORITES,
    icon: 'star',
  },
  {
    label: 'HEADER_MENU_BOOKS_I_READ',
    to: BOOKS_I_READ,
    icon: 'book',
  },
  {
    label: 'HEADER_MENU_LOGOUT',
    to: LOGOUT,
    icon: 'log-out',
  },
];
