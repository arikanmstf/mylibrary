/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Field } from 'redux-form';
import type { Node } from 'react';

import defaultStyle from './style.json';

import type { TextFieldProps } from './types';

const TextField = (props: TextFieldProps): ?Node => {
  const { label, style, ...other } = props;
  const mergedStyles = StyleSheet.create({
    container: {
      ...defaultStyle,
      ...style,
    },
  });

  return (
    <Field
      component={TextInput}
      placeholder={label}
      style={mergedStyles.container}
      {...other}
    />
  );
};

export default TextField;
