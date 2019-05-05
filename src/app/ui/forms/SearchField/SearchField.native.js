/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import { Field } from 'redux-form/immutable';
import Search from 'react-native-search-box';
import type { Node } from 'react';

import type { SearchFieldProps } from './types';
import type { ReduxFieldProps } from '../types';

const renderTextField = (
  {
    input,
    type,
    ...other
  }: ReduxFieldProps
) => (
  <Search
    keyboardType={type === 'number' ? 'numeric' : undefined}
    onChangeText={input.onChange}
    {...input}
    {...other}
    defaultValue={input && input.value ? input.value.toString() : undefined}
  />
);

const SearchField = (props: SearchFieldProps): ?Node => {
  const {
    placeholder,
    type,
    ...other
  } = props;

  return (
    <Field
      component={renderTextField}
      placeholder={placeholder}
      {...other}
      type={type}
    />
  );
};

export default SearchField;
