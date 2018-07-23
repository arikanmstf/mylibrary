/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Field } from 'redux-form/immutable';
import type { Node } from 'react';

import defaultStyle from './style.json';

import type { TextFieldProps, ReduxFieldProps } from './types';

const renderTextField = ({ input, ...other }: ReduxFieldProps) => (
  <TextInput
    onChangeText={input.onChange}
    {...input}
    {...other}
  />
);

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
      component={renderTextField}
      placeholder={label}
      style={mergedStyles.container}
      {...other}
    />
  );
};

export default TextField;
