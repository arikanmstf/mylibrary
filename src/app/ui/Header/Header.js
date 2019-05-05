/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import logger from 'helpers/logger';
import { white } from 'constants/theme/color';
import { ICON_MENU } from 'constants/theme/icons';
import Logo from 'assets/images/logo.png';
import HeaderSearch from 'ui/Header/HeaderSearch';
import {
  Image,
  Text,
  SideNavigation,
  Icon,
} from 'ui';
import { HOME } from 'constants/routes/routeNames';
import { mapStateToProps, mapDispatchToProps } from './actions';

import type { HeaderProps } from './types';

const styles = {
  title: {
    paddingLeft: '20px',
  },
  list: {
    width: '250px',
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
  toggleDrawer = () => {
    logger.log('toggleDrawer');
    const {
      toggleDrawer,
    } = this.props;

    if (toggleDrawer) {
      toggleDrawer();
    }
  };

  render() {
    const {
      classes,
      isDrawerOpen,
      title,
      home,
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
          { !home ? (<Text className={classes && classes.flex}>{title}</Text>) : (
            <HeaderSearch />
          )}
          <IconButton
            onClick={this.toggleDrawer}
          >
            <Icon name={ICON_MENU} />
          </IconButton>
        </Toolbar>
        <Drawer anchor="right" open={!!isDrawerOpen} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
          >
            <SideNavigation />
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
