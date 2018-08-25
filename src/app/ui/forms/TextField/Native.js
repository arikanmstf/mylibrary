/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { Field } from 'redux-form/immutable';
import {
  Input as TextInput,
  Item,
  Text,
  Right,
} from 'native-base';
import type { Node } from 'react';

import defaultStyle from './style.json';

import type { TextFieldProps, ReduxFieldProps } from './types';

const renderTextField = (
  { input, meta: { touched, error }, ...other }: ReduxFieldProps
) => (
  <Item error={!!(touched && error)}>
    <TextInput
      onChangeText={input.onChange}
      {...input}
      {...other}
    />
    { touched && error ? <Right><Text>{error}</Text></Right> : null }
  </Item>
);

const TextField = (props: TextFieldProps): ?Node => {
  const {
    label,
    style,
    type,
    ...other
  } = props;

  const mergedStyles = StyleSheet.create({
    container: {
      ...defaultStyle,
      ...style,
    },
  });
  const isPassword = type === 'password';

  return (
    <Field
      component={renderTextField}
      placeholder={label}
      style={mergedStyles.container}
      {...other}
      secureTextEntry={isPassword}
    />
  );
};

export default TextField;
