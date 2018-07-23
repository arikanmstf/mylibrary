/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { Row } from 'ui/native';

import type { Node } from 'react';
import type { FormProps } from './types';

const Form = (props: FormProps): ?Node => {
  return (<Row {...props} />);
};

export default Form;
