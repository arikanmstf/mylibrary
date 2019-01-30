/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import {
  ListItem,
  Left,
  Right,
  Icon,
  Body,
} from 'native-base';
import logger from 'helpers/logger';
import { Text, TextField } from 'ui/native';
import fields from 'constants/forms/addToList';

import type { Item } from 'helpers/api/types';
import type { RowDetailProps } from './types';

class RowDetail extends PureComponent<RowDetailProps> {
  static hasRowId(rowId: number) {
    return (compareRow: Item) => (compareRow.id === rowId);
  }

  componentDidMount() {
    const {
      row,
      onFormInitialize,
      form,
      compareRows,
      addToListId,
    } = this.props;
    if (onFormInitialize) {
      const foundRow = compareRows.find(RowDetail.hasRowId(row.id));

      onFormInitialize(
        form,
        {
          [fields.ORDER_NO]: foundRow ? foundRow.orderNo : null,
          [fields.LIST_ID]: row.id,
          [fields.ADD_TO_LIST_ID]: addToListId,
        }
      );
    }
  }

  componentDidUpdate(prevProps: RowDetailProps) {
    const {
      row,
      form,
      onFormChange,
      compareRows,
    } = this.props;
    if (onFormChange && (prevProps.compareRows !== compareRows || prevProps.row !== row)) {
      const foundRow = compareRows.find(RowDetail.hasRowId(row.id));

      onFormChange(
        form,
        {
          [fields.ORDER_NO]: foundRow ? foundRow.orderNo : null,
          [fields.LIST_ID]: row.id,
        }
      );
    }
  }

  render() {
    const { row, compareRows, handleSubmit } = this.props;
    const isSelected = compareRows.some(RowDetail.hasRowId(row.id));
    logger.log('render: RowDetail');

    return (
      <ListItem
        selected={isSelected}
        key={row.id}
      >
        <Left>
          <Text>{row.title}</Text>
        </Left>
        <Body>
          <TextField
            name={fields.ORDER_NO}
            type="number"
            style={{ width: 100, marginRight: 20 }}
          />
        </Body>
        <Right>
          <Icon
            name={isSelected ? 'checkmark' : 'add'}
            style={{ fontSize: 30 }}
            onPress={handleSubmit}
          />
        </Right>
      </ListItem>
    );
  }
}

export default RowDetail;
