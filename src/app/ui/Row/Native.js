// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import defaultStyle from './style.json';
import type { RowProps } from './types';

const Row = (props: RowProps) => {
  const { style, ...other } = props;
  const mergedStyles = StyleSheet.create({
    container: {
      ...defaultStyle,
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