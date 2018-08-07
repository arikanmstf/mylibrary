/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
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
import {
  HOME,
  PROFILE,
  FAVORITES,
  BOOKS_I_READ,
} from 'constants/routes/routeNames';
import styles from './style';

import type { HeaderProps } from './types';

class Header extends React.PureComponent<HeaderProps> {
  state = {
    isDrawerOpen: false,
  };

  toggleDrawer = () => () => {
    logger.log('toggleDrawer');
    this.setState((prevState) => ({ isDrawerOpen: !prevState.isDrawerOpen }));
  };

  render() {
    const {
      classes,
    } = this.props;

    const { isDrawerOpen } = this.state;

    return (
      <AppBar className={classes.container}>
        <Toolbar>
          <Image
            source={Logo}
            className={classes.image}
            alt="mylibrary logo"
            to={HOME}
          />
          <TextField
            name={fields.QUERY}
            type="search"
            className={classes.search}
            label={t.get('HEADER_SEARCH')}
          />
          <div className={classes.flex} />
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
            <MenuList className={classes.list}>
              <Link
                to={PROFILE}
              >
                <MenuItem>
                  <ListItemIcon>
                    <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText primary={t.get('HEADER_MENU_PROFILE')} />
                </MenuItem>
              </Link>
              <Link to={FAVORITES}>
                <MenuItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={t.get('HEADER_MENU_FAVORITES')} />
                </MenuItem>
              </Link>
              <Link to={BOOKS_I_READ}>
                <MenuItem>
                  <ListItemIcon>
                    <BookIcon />
                  </ListItemIcon>
                  <ListItemText primary={t.get('HEADER_MENU_BOOKS_I_READ')} />
                </MenuItem>
              </Link>
              <MenuItem>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={t.get('HEADER_MENU_LOGOUT')} />
              </MenuItem>
            </MenuList>
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default reduxForm({
  form: SEARCH_FORM_KEY,
})(withStyles(styles)(Header));
