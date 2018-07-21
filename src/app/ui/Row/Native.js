// @flow
import React from 'react';
import { StyleSheet, View as ViewNative } from 'react-native';
import RowStyle from './style.json';
import type { RowProps } from './types';

const Row = (props: RowProps) => {
  const { style, ...other } = props;
  const mergedStyles = StyleSheet.create({
    container: {
      ...RowStyle,
      ...style,
    },
  });

  return (
    <ViewNative
      style={mergedStyles.container}
      {...other}
    />
  );
};

export default Row;
