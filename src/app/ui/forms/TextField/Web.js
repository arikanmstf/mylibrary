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
import type { TextFieldProps, ReduxFieldProps } from './types';
import defaultStyle from './style.json';

const renderTextField = ({
  input, meta: { touched, error }, ...other
}: ReduxFieldProps) => (
  <WebTextField
    errorText={touched && error}
    {...input}
    {...other}
  />
);

const TextField = (props: TextFieldProps): Node => {
  const { style, name, ...other } = props;
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
      {...other}
    />
  );
};

export default TextField;
