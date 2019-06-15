/**
 * Web Component Template By => create-module script
 * @version 1.2.1
 *
 */

// @flow
import React from 'react';
import Async from 'react-select/async';
import AsyncCreatable from 'react-select/async-creatable';
import debounce from 'debounce-promise';

import type { AsyncSelectProps } from './types';

class AsyncSelect extends React.PureComponent<AsyncSelectProps> {
  constructor(props) {
    super(props);

    const { fetchData } = props;

    if (!fetchData) {
      throw new Error('fetchData is undefined or null');
    }

    this.fetchDataDebounced = debounce(fetchData, 500, { leading: false, trailing: true });
    this.state = {
      title: props.initialTitle,
    };
  }

  handleChange = (value) => {
    const { input } = this.props;

    if (!input) {
      return;
    }

    const { onChange } = input;
    this.setState({
      title: value.label,
    });

    if (onChange) {
      onChange(value.value);
    }
  };

  handleCreateOption = (title) => {
    const { onCreateOption } = this.props;
    this.setState({
      title,
    });

    if (onCreateOption) {
      onCreateOption(title);
    }
  };

  loadOptions = (search, callback) => {
    this.fetchDataDebounced({ search }).then((books) => {
      callback(books.content.map((c) => ({ value: c.id, label: c.title })));
    });
  };

  render() {
    const {
      creatable, input: { value },
    } = this.props;
    const { title } = this.state;
    const Component = creatable ? AsyncCreatable : Async;

    return (
      <Component
        cacheOptions
        loadOptions={this.loadOptions}
        onChange={this.handleChange}
        onCreateOption={creatable ? this.handleCreateOption : undefined}
        createOptionPosition={creatable ? 'first' : undefined}
        value={{
          value,
          label: title,
        }}
      />
    );
  }
}

export default AsyncSelect;
