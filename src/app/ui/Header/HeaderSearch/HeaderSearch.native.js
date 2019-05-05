/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { Form } from 'redux-form';
import debounce from 'lodash.debounce';
import { Item } from 'native-base';
import { Field } from 'redux-form/immutable';

import t from 'helpers/i18n/Translate';
import fields from 'constants/forms/search';
import { ICON_SEARCH, headerIconDefaultStyle } from 'constants/theme/icons';
import Icon from 'ui/Icon/Icon';
import SearchField from 'ui/forms/SearchField/SearchField.native'; // eslint-disable-line

import type { HeaderSearchProps } from './types';
import { onSubmit } from './actions';

const SEARCH_SUBMIT_TIMEOUT = 500;

export default class HeaderSearch extends PureComponent<HeaderSearchProps> {
  constructor(props) {
    super(props);

    this.debounced = debounce(() => {
      const { handleSubmit } = props;
      handleSubmit(onSubmit)();
    }, SEARCH_SUBMIT_TIMEOUT, {
      leading: false,
      trailing: true,
    });
  }

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
