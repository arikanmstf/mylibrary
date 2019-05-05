/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';

import t from 'helpers/i18n/Translate';
import fields from 'constants/forms/search';
import TextField from 'ui/forms/TextField/TextField';
import Form from 'ui/Form/Form';

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

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          name={fields.SEARCH}
          type="search"
          style={{
            paddingTop: '14px',
            margin: '0 20px',
          }}
          label={t.get('HEADER_SEARCH')}
          onChange={this.debounced}
        />
      </Form>
    );
  }
}
