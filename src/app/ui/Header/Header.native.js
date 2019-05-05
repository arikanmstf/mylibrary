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
  Title,
} from 'native-base';
import { TextField, Icon } from 'ui/native';
import t from 'helpers/i18n/Translate';
import logger from 'helpers/logger';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import {
  ICON_MENU, ICON_BACK, ICON_SEARCH, HeaderIconDefaultStyle
} from 'constants/theme/icons';

import { mapDispatchToProps, submitSearchForm } from './actions';
import { SEARCH_SUBMIT_TIMEOUT } from './types';

import type { HeaderProps, HeaderState } from './types';

export class Header extends PureComponent<HeaderProps, HeaderState> {
  state = {
    isSearchFocus: false,
  };

  componentDidMount() {
    const { initialValues, initialize } = this.props;
    initialize(initialValues);
  }

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

    if (handleSubmit) {
      handleSubmit(submitSearchForm)();
    }
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
          <Icon name={ICON_MENU} style={HeaderIconDefaultStyle}/>
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
          <Icon name={ICON_BACK} style={HeaderIconDefaultStyle} />
        </TouchableOpacity>
      </Left>
    ) : null;
  }

  renderCenter() {
    const { title } = this.props;

    return title ? (<Body><Title>{title}</Title></Body>) : (
      <Item>
        <Icon name={ICON_SEARCH} style={HeaderIconDefaultStyle} />
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
