/**
 * Web Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import t from 'helpers/i18n/Translate';
import { withRouter } from 'react-router-dom';
import { Icon } from 'ui';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import routes from './sideNavigationItems';
import { mapStateToProps, mapDispatchToProps } from './actions';

import type { SideNavigationProps, SideNavigationItem } from './types';

const MenuListStyled = styled(MenuList)`
width: '250px'
`;

class SideNavigation extends PureComponent<SideNavigationProps> {
  handleItemClick = (route: SideNavigationItem) => {
    const { history, hideDrawerAsync } = this.props;
    if (hideDrawerAsync) {
      hideDrawerAsync();
    }

    if (route.to && history) {
      history.push(route.to);
    }

    if (route.onPress) {
      route.onPress(this.props);
    }
  };

  mapSideNavigationItems() {
    const { listType } = this.props;
    return routes.map((route: SideNavigationItem) => (
      <MenuItem
        key={route.label}
        onClick={() => { this.handleItemClick(route); }}
        selected={listType && (listType === route.listType)}
      >
        <ListItemIcon>
          <Icon name={route.icon} />
        </ListItemIcon>
        <ListItemText primary={t.get(route.label)} />
      </MenuItem>
    ));
  }

  render() {
    return (
      <MenuListStyled>
        {this.mapSideNavigationItems()}
      </MenuListStyled>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideNavigation));
