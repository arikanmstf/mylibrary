/**
 * Native Component Template By => create-module script
 * @version 1.2.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { Map } from 'immutable';
import { SelectField, TextField } from 'ui';
import { BASE_CARD_DATA_MAP_KEYS } from 'modules/card/constants';
import t from 'helpers/i18n/Translate';

import { setAddMethodBySubCardType, setFetchTitleMethodBySubCardType } from './helpers';
import type { SubCardSelectSearchFieldProps } from './types';

class SubCardSelectSearchField extends PureComponent<SubCardSelectSearchFieldProps> {
  handleCreateOption = (title) => {
    const { input: { value, onChange } } = this.props;

    const type = value ? value.get(BASE_CARD_DATA_MAP_KEYS.TYPE) : '';

    const newValue = new Map(
      [
        [BASE_CARD_DATA_MAP_KEYS.TITLE, title],
        [BASE_CARD_DATA_MAP_KEYS.TYPE, type],
      ]
    );

    onChange(newValue);
    this.updateValueFromTitle(title).then();
  };

  handleChange = (event, newId) => {
    const { input: { value, onChange } } = this.props;
    const type = value ? value.get(BASE_CARD_DATA_MAP_KEYS.TYPE) : '';

    const newValue = new Map(
      [
        [BASE_CARD_DATA_MAP_KEYS.ID, newId],
        [BASE_CARD_DATA_MAP_KEYS.TYPE, type],
      ]
    );
    onChange(newValue);
  };

  updateValueFromTitle = async (title) => {
    const { input: { value, onChange } } = this.props;
    const type = value ? value.get(BASE_CARD_DATA_MAP_KEYS.TYPE) : '';
    const addTitle = setAddMethodBySubCardType(type);
    const result = await addTitle({ title });

    const newValue = new Map(
      [
        [BASE_CARD_DATA_MAP_KEYS.TITLE, result.title],
        [BASE_CARD_DATA_MAP_KEYS.TYPE, type],
        [BASE_CARD_DATA_MAP_KEYS.ID, result.id],
      ]
    );
    onChange(newValue);
  };

  render = () => {
    const { input: { name, value }, required } = this.props;

    const title = value ? value.get(BASE_CARD_DATA_MAP_KEYS.TITLE) : '';
    const type = value ? value.get(BASE_CARD_DATA_MAP_KEYS.TYPE) : '';
    const fetchData = setFetchTitleMethodBySubCardType(type);

    return fetchData ? (
      <SelectField
        required={required}
        name={`${name}.${BASE_CARD_DATA_MAP_KEYS.ID}`}
        fetchData={fetchData}
        async
        creatable
        onCreateOption={this.handleCreateOption}
        onChange={this.handleChange}
        initialTitle={title}
      />
    ) : (
      <TextField
        required={required}
        name={`${name}.${BASE_CARD_DATA_MAP_KEYS.TITLE}`}
        label={t.get('GENERAL_TITLE')}
      />
    );
  };
}

export default SubCardSelectSearchField;
