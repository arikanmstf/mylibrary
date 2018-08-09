// @flow
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import defaultStyle from './style.json';
import type { ScreenProps } from './types';

const Screen = (props: ScreenProps) => {
  const { style, center, ...other } = props;
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
      {...other}
    />
  );
};

export default Screen;
