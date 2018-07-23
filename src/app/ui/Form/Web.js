/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';

import type { Node } from 'react';
import type { FormProps } from './types';

const Form = (props: FormProps): Node => {
  return <form {...props} />;
};

export default Form;
