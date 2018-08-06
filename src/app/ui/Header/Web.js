/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

import logger from 'helpers/logger';
import Logo from 'assets/images/logo.png';
import { Image } from 'ui';
import { white } from 'constants/theme/color';

import type { HeaderProps } from './types';

const styles = {
  title: {
    flexGrow: 1,
    paddingLeft: '20px',
  },
  list: {
    width: '250px',
  },
};

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
      style,
      title,
      classes,
      ...rest
    } = this.props;
    const mergedStyle = {
      backgroundColor: white,
      ...style,
    };
    const { isDrawerOpen } = this.state;

    return (
      <AppBar {...rest} style={mergedStyle}>
        <Toolbar>
          <Image
            source={Logo}
            style={
              {
                width: 50,
                height: 50,
              }
            }
            alt="mylibrary logo"
          />
          <Typography variant="title" color="inherit" className={classes.title}>
            {title}
          </Typography>
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
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
          >
            <List className={classes.list} />
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
