/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  Header as HeaderNative,
  Body,
  Left,
  Title,
} from 'native-base';
import { Icon } from 'ui/native';
import logger from 'helpers/logger';
import {
  ICON_BACK, headerIconDefaultStyle,
} from 'constants/theme/icons';

import HeaderMenu from './HeaderMenu';
import { mapDispatchToProps } from './actions';

import type { HeaderProps, HeaderState } from './types';

export class Header extends PureComponent<HeaderProps, HeaderState> {
  handleBackButtonPress = () => {
    const { navigation } = this.props;
    logger.log('handleBackButtonPress');

    if (navigation) {
      navigation.goBack();
    }
  };

  renderBackButton() {
    const { home } = this.props;

    return !home ? (
      <Left>
        <TouchableOpacity
          onPress={this.handleBackButtonPress}
          style={{ width: 70 }}
        >
          <Icon name={ICON_BACK} style={headerIconDefaultStyle} />
        </TouchableOpacity>
      </Left>
    ) : <Left />;
  }

  render() {
    const { title } = this.props;

    return (
      <HeaderNative rounded>
        {this.renderBackButton()}
        <Body><Title>{title}</Title></Body>
        <HeaderMenu />
      </HeaderNative>
    );
  }
}

export default connect(null, mapDispatchToProps)(withNavigation(Header));
