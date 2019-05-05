/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';

import t from 'helpers/i18n/Translate';
import fields from 'constants/forms/search';
import SearchField from 'ui/forms/SearchField/SearchField.native'; // eslint-disable-line

import type { HeaderSearchProps } from './types';
import { onSubmit } from './actions';

export default class HeaderSearch extends PureComponent<HeaderSearchProps> {
  componentDidMount() {
    const { initialValues, initialize } = this.props;
    initialize(initialValues);
  }

  handleSearch = () => {
    const {
      handleSubmit,
    } = this.props;

    if (handleSubmit) {
      handleSubmit(onSubmit)();
    }
  };

  render() {
    return (
      <SearchField
        name={fields.SEARCH}
        placeholder={t.get('HEADER_SEARCH')}
        onSearch={this.handleSearch}
      />
    );
  }
}
