// @flow
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import defaultStyle from './style.json';
import type { ScreenProps } from './types';

const Screen = (props: ScreenProps) => {
  const { style, ...other } = props;
  const mergedStyles = StyleSheet.create({
    container: {
      ...defaultStyle,
      ...style,
      paddingTop: 18,
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
