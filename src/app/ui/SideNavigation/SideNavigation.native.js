// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { withNavigation } from 'react-navigation';
import t from 'helpers/i18n/Translate';
import {
  ListItem,
  Text,
  List,
  Content,
} from 'native-base';
import { white } from 'constants/theme/color';
import { Icon } from 'ui/native';
import { sideNavigationIconDefaultStyle } from 'constants/theme/icons';

import routes from './sideNavigationItems';
import { mapDispatchToProps } from './actions';
import type { SideNavigationProps, SideNavigationItem } from './types';

class SideNavigation extends PureComponent<SideNavigationProps> {
  handleItemClick = async (route: SideNavigationItem) => {
    const { navigation, hideDrawerAsync } = this.props;

    if (hideDrawerAsync) {
      await hideDrawerAsync();
    }

    if (route.to && navigation) {
      navigation.navigate(route.to);
    }

    if (route.onPress) {
      route.onPress(this.props);
    }
  };

  renderList = (route: SideNavigationItem) => {
    return (
      <ListItem
        button
        onPress={() => { this.handleItemClick(route); }}
      >
        <Icon name={route.icon} style={sideNavigationIconDefaultStyle} />
        <Text>{t.get(route.label)}</Text>
      </ListItem>
    );
  };

  render() {
    return (
      <Content style={{ backgroundColor: white, paddingTop: 20 }}>
        <List
          dataArray={routes}
          renderRow={this.renderList}
        />
      </Content>
    );
  }
}

export default connect(null, mapDispatchToProps)(withNavigation(SideNavigation));
