/**
 * Native Component Template By => create-module script
 * @version 1.2.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { Map, List } from 'immutable';
import { SelectField, TextField } from 'ui';
import { BASE_CARD_DATA_MAP_KEYS } from 'modules/card/constants';
import t from 'helpers/i18n/Translate';

import { setAddMethodBySubCardType, setFetchTitleMethodBySubCardType } from './helpers';
import type { SubCardSelectSearchFieldProps } from './types';

class SubCardSelectSearchField extends PureComponent<SubCardSelectSearchFieldProps> {
  handleCreateOption = (title) => {
    const { input: { value, onChange } } = this.props;

    const type = value ? value.get(BASE_CARD_DATA_MAP_KEYS.TYPE) : '';

    const v = new Map(
      [
        [BASE_CARD_DATA_MAP_KEYS.ID, 0],
        [BASE_CARD_DATA_MAP_KEYS.TITLE, title],
        [BASE_CARD_DATA_MAP_KEYS.TYPE, type],
      ]
    );
    const valueMultiple = value.toJS();

    if (valueMultiple[BASE_CARD_DATA_MAP_KEYS.TITLE]) {
      valueMultiple[BASE_CARD_DATA_MAP_KEYS.TITLE].push(title);
    } else {
      valueMultiple[BASE_CARD_DATA_MAP_KEYS.TITLE] = [title];
    }

    if (valueMultiple[BASE_CARD_DATA_MAP_KEYS.ID]) {
      valueMultiple[BASE_CARD_DATA_MAP_KEYS.ID].push(0);
    } else {
      valueMultiple[BASE_CARD_DATA_MAP_KEYS.ID] = [0];
    }

    const valueMap = Map(valueMultiple);

    const newValue = this.isMulti() ? valueMap : v;

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

    const v = new Map(
      [
        [BASE_CARD_DATA_MAP_KEYS.TITLE, result.title],
        [BASE_CARD_DATA_MAP_KEYS.TYPE, type],
        [BASE_CARD_DATA_MAP_KEYS.ID, result.id],
      ]
    );

    const valueMultiple = value.toJS();

    if (valueMultiple[BASE_CARD_DATA_MAP_KEYS.TITLE]) {
      valueMultiple[BASE_CARD_DATA_MAP_KEYS.TITLE].push(result.title);
    } else {
      valueMultiple[BASE_CARD_DATA_MAP_KEYS.TITLE] = [result.title];
    }

    if (valueMultiple[BASE_CARD_DATA_MAP_KEYS.ID]) {
      valueMultiple[BASE_CARD_DATA_MAP_KEYS.ID].push(result.id);
    } else {
      valueMultiple[BASE_CARD_DATA_MAP_KEYS.ID] = [result.id];
    }

    const valueMap = Map(valueMultiple);

    const newValue = this.isMulti() ? valueMap : v;
    onChange(newValue);
  };

  isMulti() {
    const { input: { value } } = this.props;
    const id = value ? value.get(BASE_CARD_DATA_MAP_KEYS.ID) : '';
    return List.isList(id) || Array.isArray(id);
  }

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
        isMulti={this.isMulti()}
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
