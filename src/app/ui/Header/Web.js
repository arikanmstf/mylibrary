/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
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
import { white } from 'constants/theme/color';
import Logo from 'assets/images/logo.png';
import {
  Image, TextField, Form, Text,
} from 'ui';
import t from 'helpers/i18n/Translate';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import { HOME } from 'constants/routes/routeNames';
import { mapStateToProps, mapDispatchToProps, submitSearchForm } from './actions';
import routes from './sideNavigationItems';

import { SEARCH_SUBMIT_TIMEOUT } from './types';
import type { HeaderProps, SideNavigationItem } from './types';

const styles = {
  title: {
    paddingLeft: '20px',
  },
  list: {
    width: '250px',
  },
  search: {
    paddingTop: '14px',
    margin: '0 20px',
  },
  flex: {
    flexGrow: 1,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    flex: 0,
  },
  container: {
    backgroundColor: white,
    position: 'fixed',
    top: 0,
    width: '100%',
  },
};

export class Header extends PureComponent<HeaderProps> {
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
            { Icon ? (
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
            ) : null }
            <ListItemText primary={t.get(route.label)} />
          </MenuItem>
        </Link>
      );
    });
  }

  toggleDrawer = () => {
    logger.log('toggleDrawer');
    const {
      isDrawerOpen,
      hideDrawer,
      showDrawer,
    } = this.props;

    if (isDrawerOpen) {
      if (hideDrawer) hideDrawer();
    } else if (showDrawer) {
      showDrawer();
    }
  };

  handleChange = () => {
    const {
      handleSubmit,
    } = this.props;

    handleSubmit(submitSearchForm)();
  };

  render() {
    const {
      classes,
      isDrawerOpen,
      handleSubmit,
      title,
    } = this.props;

    return (
      <AppBar className={classes && classes.container}>
        <Form onSubmit={handleSubmit}>
          <Toolbar>
            <Image
              source={Logo}
              className={classes && classes.image}
              alt="mylibrary logo"
              to={HOME}
            />
            { title ? (<Text className={classes && classes.flex}>{title}</Text>) : (
              <TextField
                name={fields.SEARCH}
                type="search"
                className={classes && classes.search}
                label={t.get('HEADER_SEARCH')}
                onChange={debounce(this.handleChange, SEARCH_SUBMIT_TIMEOUT)}
              />
            )}
            <IconButton
              onClick={this.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Form>
        <Drawer anchor="right" open={!!isDrawerOpen} onClose={this.toggleDrawer}>
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
  onSubmit: submitSearchForm,
})(
  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))
);
