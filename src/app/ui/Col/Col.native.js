/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { Node } from 'react';
import type { ColProps } from './types';
import defaultStyle from './style.json';

const Col = (props: ColProps): ?Node => {
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

export default Col;
