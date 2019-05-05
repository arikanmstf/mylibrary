/**
 * Web Component Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import BookIcon from '@material-ui/icons/Book';
import ProfileIcon from '@material-ui/icons/SettingsApplications';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import BackIcon from '@material-ui/icons/Backspace';
import MenuIcon from '@material-ui/icons/Menu';
import CheckIcon from '@material-ui/icons/Check';
import { green500 } from 'constants/theme/color';

import {
  ICON_BACK,
  ICON_BOOK,
  ICON_CHECK,
  ICON_DOWNLOAD,
  ICON_FAVORITE,
  ICON_LOGOUT,
  ICON_MENU,
  ICON_MORE,
  ICON_PLUS,
  ICON_SETTINGS,
  ICON_SHARE,
  ICON_SEARCH,
} from 'constants/theme/icons';

import type { Node } from 'react';

import type { IconProps } from './types';

const CustomIcon = (props: IconProps): Node => {
  const {
    name, active, style, ...other
  } = props;
  let Icon;

  switch (name) {
    case ICON_SETTINGS:
      Icon = ProfileIcon;
      break;
    case ICON_FAVORITE:
      Icon = StarIcon;
      break;
    case ICON_BOOK:
      Icon = BookIcon;
      break;
    case ICON_LOGOUT:
      Icon = LogoutIcon;
      break;
    case ICON_PLUS:
      Icon = AddIcon;
      break;
    case ICON_MORE:
      Icon = MoreIcon;
      break;
    case ICON_DOWNLOAD:
      Icon = DownloadIcon;
      break;
    case ICON_SEARCH:
      Icon = SearchIcon;
      break;
    case ICON_SHARE:
      Icon = ShareIcon;
      break;
    case ICON_BACK:
      Icon = BackIcon;
      break;
    case ICON_MENU:
      Icon = MenuIcon;
      break;
    case ICON_CHECK:
      Icon = CheckIcon;
      break;
    default:
      Icon = null;
  }
  return (
    <Icon
      style={{
        color: active ? green500 : undefined,
        ...style,
      }}
      {...other}
    />
  );
};

export default CustomIcon;
