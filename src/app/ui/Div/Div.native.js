// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { DivProps } from './types';

const defaultStyle = {
  marginTop: 5,
  marginBottom: 5,
  flexDirection: 'column',
};

const Row = (props: DivProps) => {
  const { style, fullHeight, ...other } = props;
  const heightStyle = fullHeight ? { height: '100%' } : {};
  const mergedStyles = StyleSheet.create({
    container: {
      ...defaultStyle,
      ...heightStyle,
      ...style,
    },
  });

  return (
    <View
      style={mergedStyles.container}
      {...other}
    />
  );
};

export default Row;
