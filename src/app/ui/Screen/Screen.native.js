// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import { Drawer } from 'native-base';
import { SideNavigation } from 'ui/native';
import logger from 'helpers/logger';
import defaultStyle from './style.json';
import { mapStateToProps, mapDispatchToProps } from './actions';
import type { ScreenProps } from './types';

export class Screen extends PureComponent<ScreenProps> {
  hideDrawer = () => {
    const { hideDrawer } = this.props;
    if (hideDrawer) {
      logger.log('hideDrawer');
      hideDrawer();
    }
  };

  render() {
    const {
      style,
      center,
      isDrawerOpen,
      ...other
    } = this.props;
    const centerStyle = center ? { justifyContent: 'center', alignItems: 'center' } : {};
    const mergedStyles = StyleSheet.create({
      container: {
        ...defaultStyle,
        ...centerStyle,
        ...style,
      },
    });

    return (
      <Drawer
        content={<SideNavigation />}
        side="right"
        open={isDrawerOpen}
        onClose={this.hideDrawer}
        type="displace"
      >
        <ScrollView
          contentContainerStyle={mergedStyles.container}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
          {...other}
        />
      </Drawer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
