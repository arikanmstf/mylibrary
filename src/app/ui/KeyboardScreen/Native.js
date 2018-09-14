/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Node } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import defaultStyle from 'ui/Screen/style';

import type { ScreenProps } from 'ui/Screen/types';

const KeyboardScreen = (props: ScreenProps): ?Node => {
  const {
    style,
    center,
    ...other
  } = props;

  const centerStyle = center ? { justifyContent: 'center', alignItems: 'center' } : {};
  const mergedStyles = StyleSheet.create({
    container: {
      ...defaultStyle,
      ...centerStyle,
      ...style,
    },
  });

  return (
    <ScrollView
      contentContainerStyle={mergedStyles.container}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
    >
      <KeyboardAvoidingView
        style={mergedStyles.container}
        behavior="padding"
        {...other}
      />
    </ScrollView>
  );
};

export default KeyboardScreen;
