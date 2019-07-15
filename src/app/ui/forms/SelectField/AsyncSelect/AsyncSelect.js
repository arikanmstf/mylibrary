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

  componentDidUpdate(prevProps: AsyncSelectProps) {
    const { initialTitle } = this.props;
    const { initialTitle: prevInitialTitle } = prevProps;

    if (initialTitle !== prevInitialTitle) {
      this.setState({ title: initialTitle }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  handleChange = (value) => {
    const { input, isMulti } = this.props;

    if (!input) {
      return;
    }

    const { onChange } = input;

    if (!value) {
      this.setState({
        title: '',
      });
      onChange(isMulti ? [] : null);
      return;
    }

    this.setState({
      title: isMulti ? (value.map((v) => v.label)) : value.label,
    });

    if (onChange) {
      onChange(isMulti ? (value.map((v) => v.value)) : value.value);
    }
  };

  handleCreateOption = (newTitle) => {
    const { onCreateOption, isMulti } = this.props;
    const { title } = this.state;
    let titleList = [];

    if (isMulti) {
      titleList = title.push(newTitle);
      titleList = titleList.toArray ? titleList.toArray() : titleList;
    }

    this.setState({
      title: isMulti ? titleList : newTitle,
    });

    if (onCreateOption) {
      onCreateOption(newTitle);
    }
  };

  loadOptions = (search, callback) => {
    this.fetchDataDebounced({ search }).then((books) => {
      callback(books.content.map((c) => ({ value: c.id, label: c.title })));
    });
  };

  render() {
    const {
      creatable, input: { value }, isMulti,
    } = this.props;
    const { title } = this.state;
    const Component = creatable ? AsyncCreatable : Async;
    let valueArray = [];

    if (isMulti) {
      valueArray = value.map((v, i) => ({ value: v, label: title.get ? title.get(i) : title[i] }));
      valueArray = valueArray.toArray ? valueArray.toArray() : valueArray;
    }

    const newValue = isMulti ? valueArray : {
      value,
      label: title,
    };

    return (
      <Component
        cacheOptions
        loadOptions={this.loadOptions}
        onChange={this.handleChange}
        onCreateOption={creatable ? this.handleCreateOption : undefined}
        createOptionPosition={creatable ? 'first' : undefined}
        isMulti={isMulti}
        value={newValue}
      />
    );
  }
}

export default AsyncSelect;
