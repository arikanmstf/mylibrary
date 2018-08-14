/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router-native';
import {
  Header as HeaderNative,
  Item,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Content,
  List,
  ListItem,
  Text,
} from 'native-base';
import { TextField } from 'ui/native';
import t from 'helpers/i18n/Translate';
import logger from 'helpers/logger';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import { white } from 'constants/theme/color';
import { mapDispatchToProps } from './actions';
import routes from './sideNavigationItems';

import type { HeaderProps, SideNavigationItem } from './types';

export const renderList = (route: SideNavigationItem) => {
  return (
    <ListItem
      button
    >
      <Icon name={route.icon} style={{ marginRight: 20 }} />
      <Link to={route.to}>
        <Text>{t.get(route.label)}</Text>
      </Link>
    </ListItem>
  );
};

export const SideBar = () => (
  <Content style={{ backgroundColor: white }}>
    <List
      dataArray={routes}
      renderRow={renderList}
    />
  </Content>
);

export class Header extends React.PureComponent<HeaderProps> {
  onMenuButtonPress = () => {
    const { showDrawer } = this.props;
    if (showDrawer) {
      logger.log('showDrawer');
      showDrawer();
    }
  };

  renderMenu() {
    return (
      <Right>
        <Button transparent onPress={this.onMenuButtonPress}>
          <Icon name="menu" />
        </Button>
      </Right>
    );
  }

  static renderLeft() {
    return (
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
    );
  }

  static renderCenter() {
    return (
      <Body>
        <Item style={{ height: 25, flexGrow: 1 }}>
          <Icon name="ios-search" />
          <TextField
            name={fields.QUERY}
            label={t.get('HEADER_SEARCH')}
            type="search"
          />
        </Item>
      </Body>
    );
  }

  render() {
    const { back } = this.props;
    return (
      <HeaderNative>
        { back ? Header.renderLeft() : null}
        {Header.renderCenter()}
        {this.renderMenu()}
      </HeaderNative>
    );
  }
}

export default reduxForm({
  form: SEARCH_FORM_KEY,
})(
  connect(null, mapDispatchToProps)(Header)
);
