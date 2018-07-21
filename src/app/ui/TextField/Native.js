/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { TextInput } from 'react-native';

import type { Node } from 'react';
import type { TextFieldProps } from './types';

const TextField = (props: TextFieldProps): ?Node => {
  const { label, ...other } = props;
  return (
    <TextInput
      placeholder={label}
      {...other}
    />
  );
};

export default TextField;
