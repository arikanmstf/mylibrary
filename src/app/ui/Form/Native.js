/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { Div } from 'ui/native';

import type { Node } from 'react';
import type { FormProps } from './types';

const Form = (props: FormProps): ?Node => {
  return (<Div {...props} />);
};

export default Form;
