/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { reduxForm } from 'redux-form/immutable';
import { withNavigation } from 'react-navigation';
import debounce from 'lodash.debounce';
import {
  Header as HeaderNative,
  Item,
  Body,
  Left,
  Right,
  Icon,
  Content,
  List,
  ListItem,
  Text,
  Title,
} from 'native-base';
import { TextField, Link } from 'ui/native';
import t from 'helpers/i18n/Translate';
import logger from 'helpers/logger';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import { white } from 'constants/theme/color';

import { mapDispatchToProps, submitSearchForm } from './actions';
import routes from './sideNavigationItems';
import { SEARCH_SUBMIT_TIMEOUT } from './types';

import type { HeaderProps, HeaderState, SideNavigationItem } from './types';

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

export class Header extends PureComponent<HeaderProps, HeaderState> {
  state = {
    isSearchFocus: false,
  };

  handleMenuButtonPress = () => {
    const { showDrawer } = this.props;
    if (showDrawer) {
      logger.log('showDrawer');
      showDrawer();
    }
  };

  handleBackButtonPress = () => {
    const { navigation } = this.props;
    logger.log('handleBackButtonPress');

    if (navigation) {
      navigation.goBack();
    }
  };

  handleChange = () => {
    const {
      handleSubmit,
    } = this.props;
    console.log(this.props);

    handleSubmit(submitSearchForm)();
  };

  handleFocus = () => {
    this.setState({
      isSearchFocus: true,
    });
  };

  handleBlur = () => {
    this.setState({
      isSearchFocus: false,
    });
  };

  renderMenu() {
    return (
      <Right>
        <TouchableOpacity
          onPress={this.handleMenuButtonPress}
          style={{ width: 70, flex: 1, alignItems: 'flex-end' }}
        >
          <Icon name="menu" />
        </TouchableOpacity>
      </Right>
    );
  }

  renderBackButton() {
    const { isSearchFocus } = this.state;
    return !isSearchFocus ? (
      <Left>
        <TouchableOpacity
          onPress={this.handleBackButtonPress}
          style={{ width: 70 }}
        >
          <Icon name="arrow-back" />
        </TouchableOpacity>
      </Left>
    ) : null;
  }

  renderCenter() {
    const { title } = this.props;

    return title ? (<Body><Title>{title}</Title></Body>) : (
      <Item>
        <Icon name="ios-search" />
        <TextField
          name={fields.SEARCH}
          placeholder={t.get('HEADER_SEARCH')}
          type="search"
          onChange={debounce(this.handleChange, SEARCH_SUBMIT_TIMEOUT)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Item>
    );
  }

  render() {
    return (
      <HeaderNative searchBar rounded>
        {this.renderBackButton()}
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
  connect(null, mapDispatchToProps)(withNavigation(Header))
);
