/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import WebTextField from '@material-ui/core/TextField';
import { Field } from 'redux-form/immutable';

import type { Node } from 'react';
import type { TextFieldProps } from './types';
import type { ReduxFieldProps } from '../types';

import defaultStyle from './style.json';

const renderTextField = ({
  input, meta: { touched, error }, label, ...other
}: ReduxFieldProps) => (
  <WebTextField
    error={!!(touched && error)}
    label={(touched && error) ? `${label}, ${error}` : label}
    {...input}
    {...other}
  />
);

const TextField = (props: TextFieldProps): Node => {
  const {
    style,
    name,
    autoComplete,
    ...other
  } = props;

  const mergedStyle = {
    ...defaultStyle,
    width: '100%',
    ...style,
  };

  return (
    <Field
      component={renderTextField}
      name={name}
      style={mergedStyle}
      autoComplete={autoComplete || 'off'}
      {...other}
    />
  );
};

export default TextField;
