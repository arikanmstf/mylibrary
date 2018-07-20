/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import WebTextField from '@material-ui/core/TextField';

import type { Node } from 'react';
import type { TextFieldProps } from './types';

const TextField = (props: TextFieldProps): Node => {
  return <WebTextField {...props} />;
};

export default TextField;
