/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import logger from 'helpers/logger';
import { white } from 'constants/theme/color';
import Logo from 'assets/images/logo.png';
import {
  Image,
  TextField,
  Form,
  Text,
  SideNavigation,
} from 'ui';
import t from 'helpers/i18n/Translate';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import { HOME } from 'constants/routes/routeNames';
import { mapStateToProps, mapDispatchToProps, submitSearchForm } from './actions';

import { SEARCH_SUBMIT_TIMEOUT } from './types';
import type { HeaderProps } from './types';

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
  constructor(props) {
    super(props);

    this.debounced = debounce(() => {
      const { handleSubmit } = props;
      handleSubmit(submitSearchForm)();
    }, SEARCH_SUBMIT_TIMEOUT, {
      leading: false,
      trailing: true,
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
                onChange={this.debounced}
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
            <SideNavigation />
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
