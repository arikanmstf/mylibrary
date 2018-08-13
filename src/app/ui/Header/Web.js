/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form/immutable';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import BookIcon from '@material-ui/icons/Book';
import ProfileIcon from '@material-ui/icons/SettingsApplications';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';

import logger from 'helpers/logger';
import Logo from 'assets/images/logo.png';
import { Image, TextField } from 'ui';
import t from 'helpers/i18n/Translate';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import { HOME } from 'constants/routes/routeNames';
import styles from './style';
import { mapStateToProps, mapDispatchToProps } from './actions';
import routes from './sideNavigationItems';
import type { HeaderProps, SideNavigationItem } from './types';

class Header extends React.PureComponent<HeaderProps> {
  static mapSideNavigationItems() {
    return routes.map((route: SideNavigationItem) => {
      let Icon;

      switch (route.icon) {
        case 'settings':
          Icon = ProfileIcon;
          break;
        case 'star':
          Icon = StarIcon;
          break;
        case 'book':
          Icon = BookIcon;
          break;
        case 'log-out':
          Icon = LogoutIcon;
          break;
        default:
          Icon = null;
      }

      return (
        <Link
          to={route.to}
          key={route.to}
        >
          <MenuItem>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={t.get(route.label)} />
          </MenuItem>
        </Link>
      );
    });
  }

  toggleDrawer = () => () => {
    logger.log('toggleDrawer');
    const { isDrawerOpen, hideDrawer, showDrawer } = this.props;

    if (isDrawerOpen) {
      if (hideDrawer) hideDrawer();
    } else if (showDrawer) {
      showDrawer();
    }
  };

  render() {
    const {
      classes,
      isDrawerOpen,
    } = this.props;

    return (
      <AppBar className={classes && classes.container}>
        <Toolbar>
          <Image
            source={Logo}
            className={classes && classes.image}
            alt="mylibrary logo"
            to={HOME}
          />
          <TextField
            name={fields.QUERY}
            type="search"
            className={classes && classes.search}
            label={t.get('HEADER_SEARCH')}
          />
          <div className={classes && classes.flex} />
          <IconButton
            onClick={this.toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer anchor="right" open={isDrawerOpen} onClose={this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
          >
            <MenuList className={classes && classes.list}>
              {Header.mapSideNavigationItems()}
            </MenuList>
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default reduxForm({
  form: SEARCH_FORM_KEY,
})(
  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))
);
