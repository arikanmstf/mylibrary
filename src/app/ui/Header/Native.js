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
import debounce from 'lodash.debounce';
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
import { mapDispatchToProps, submitSearchForm } from './actions';
import routes from './sideNavigationItems';

import { SEARCH_SUBMIT_TIMEOUT } from './types';
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
  <Content style={{ backgroundColor: white, paddingTop: 20 }}>
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

  handleChange = () => {
    const {
      handleSubmit,
    } = this.props;

    handleSubmit(submitSearchForm)();
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

  renderCenter() {
    return (
      <Body>
        <Item style={{ height: 25, flexGrow: 1 }}>
          <Icon name="ios-search" />
          <TextField
            name={fields.SEARCH}
            label={t.get('HEADER_SEARCH')}
            type="search"
            onChange={debounce(this.handleChange, SEARCH_SUBMIT_TIMEOUT)}
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
        {this.renderCenter()}
        {this.renderMenu()}
      </HeaderNative>
    );
  }
}

export default reduxForm({
  form: SEARCH_FORM_KEY,
  onSubmit: submitSearchForm,
})(
  connect(null, mapDispatchToProps)(Header)
);
