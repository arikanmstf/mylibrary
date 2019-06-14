/**
 * Native Component Template By => create-module script
 * @version 1.2.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Field, FieldArray } from 'redux-form/immutable';
import t from 'helpers/i18n/Translate';
import { TextField } from 'ui';
import { ADDITIONAL_DATA_MAP_KEYS } from 'modules/publication/constants';

import type { AdditionalDataProps } from './types';

class AdditionalDataField extends PureComponent<AdditionalDataProps> {
  static renderDataItem(props) {
    const { input: { name, value } } = props;
    const key = value.get(ADDITIONAL_DATA_MAP_KEYS.KEY);

    return (
      <div style={{ display: 'flex', width: '100%' }}>
        <ListItemText style={{ flex: '50%' }} primary={t.get(`CARD_DETAIL_ADDITIONAL_DATA_${key}`)} />
        <TextField style={{ flex: '50%' }} name={`${name}.${ADDITIONAL_DATA_MAP_KEYS.VALUE}`} />
      </div>
    );
  }

  static renderData(props) {
    const { fields } = props;

    return fields.map((data) => (
      <ListItem key={data}>
        <Field
          component={AdditionalDataField.renderDataItem}
          name={data}
        />
      </ListItem>
    ));
  }

  render() {
    const { name } = this.props;

    return (
      <FieldArray
        name={name}
        component={AdditionalDataField.renderData}
      />
    );
  }
}

export default AdditionalDataField;
