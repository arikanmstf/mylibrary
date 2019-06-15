/**
 * Web Component Template By => create-module script
 * @version 1.2.1
 *
 */

// @flow
import React from 'react';
import Select from 'react-select';
import { Field } from 'redux-form/immutable';

import AsyncSelect from './AsyncSelect';
import type { SelectFieldProps } from './types';

const SyncSelect = (props: SelectFieldProps) => (
  <Select {...props} />
);

class SelectField extends React.PureComponent<SelectFieldProps> {
  render() {
    const {
      async, name, isMulti, ...other
    } = this.props;

    return (
      <Field
        component={async ? AsyncSelect : SyncSelect}
        name={name}
        isMulti={isMulti}
        {...other}
      />
    );
  }
}

export default SelectField;
