/**
 * Web Component Template By => create-module script
 * @version 1.2.1
 *
 */

// @flow
import React from 'react';
import Async from 'react-select/async';
import debounce from 'debounce-promise';

import type { AsyncSelectProps } from './types';

class AsyncSelect extends React.PureComponent<AsyncSelectProps> {
  constructor(props) {
    super(props);

    const { fetchData } = this.props;
    this.loadOptionsDebounced = debounce(this.loadOptions(fetchData), 500, { leading: false, trailing: true });
  }

  handleChange = (value) => {
    const { input } = this.props;

    if (!input) {
      return;
    }

    const { onChange } = input;

    if (onChange) {
      onChange(value.value);
    }
  };

  loadOptions = (fetchData) => async (search, callback) => {
    const books = await fetchData({ search });
    callback(books.content.map((c) => ({ value: c.id, label: c.title })));
  };

  render() {
    const { title, ...other } = this.props;

    return (
      <Async
        loadOptions={this.loadOptionsDebounced}
        placeholder={title}
        onChange={this.handleChange}
        {...other}
      />
    );
  }
}

export default AsyncSelect;
