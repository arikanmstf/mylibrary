/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';

import logger from 'helpers/logger';
import { Right } from 'native-base';
import Icon from 'ui/Icon/Icon';
import { ICON_MENU, HeaderIconDefaultStyle } from 'constants/theme/icons';

import type { HeaderMenuProps } from './types';

export default class HeaderMenu extends PureComponent<HeaderMenuProps> {
  handleMenuButtonPress = () => {
    const { showDrawer } = this.props;
    if (showDrawer) {
      logger.log('toggleDrawer');
      showDrawer();
    }
  };

  render() {
    return (
      <Right>
        <TouchableOpacity
          onPress={this.handleMenuButtonPress}
          style={{ width: 70, flex: 1, alignItems: 'flex-end' }}
        >
          <Icon name={ICON_MENU} style={HeaderIconDefaultStyle} />
        </TouchableOpacity>
      </Right>
    );
  }
}
