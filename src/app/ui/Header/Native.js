/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form/immutable';
import {
  Header as HeaderNative,
  Item,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

import { TextField } from 'ui/native';
import t from 'helpers/i18n/Translate';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import type { HeaderProps } from './types';

class Header extends React.PureComponent<HeaderProps> {
  static renderMenu() {
    return (
      <Right>
        <Button transparent>
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
        {Header.renderMenu()}
      </HeaderNative>
    );
  }
}

export default reduxForm({
  form: SEARCH_FORM_KEY,
})(Header);
