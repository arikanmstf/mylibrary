/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import {
  Header as HeaderNative,
  Item,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Content,
  Text,
} from 'native-base';
import { TextField } from 'ui/native';
import t from 'helpers/i18n/Translate';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import { white } from 'constants/theme/color';
import { mapDispatchToProps } from './actions';

import type { HeaderProps } from './types';

export const SideBar = () => (
  <Content style={{ backgroundColor: white }}>
    <Text>Hello World I am a stupid drawer</Text>
  </Content>
);

class Header extends React.PureComponent<HeaderProps> {
  onMenuButtonPress = () => {
    const { showDrawer } = this.props;
    showDrawer();
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
