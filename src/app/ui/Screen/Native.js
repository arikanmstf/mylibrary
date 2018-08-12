// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import { Drawer } from 'native-base';
import { SideBar } from 'ui/Header/Native';
import defaultStyle from './style.json';
import { mapStateToProps, mapDispatchToProps } from './actions';
import type { ScreenProps } from './types';

class Screen extends React.PureComponent<ScreenProps> {
  render() {
    const {
      style,
      center,
      isDrawerOpen,
      hideDrawer,
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
        content={<SideBar />}
        side="right"
        open={isDrawerOpen}
        ref={(ref) => { this.drawer = ref; }}
        onClose={() => hideDrawer()}
        type="overlay"
      >
        <ScrollView
          contentContainerStyle={mergedStyles.container}
          keyboardShouldPersistTaps="handled"
          {...other}
        />
      </Drawer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
