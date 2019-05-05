/**
 * Web Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { TextField, Icon } from 'ui';
import fields from 'constants/forms/addToList';
import { ICON_PLUS, ICON_CHECK } from 'constants/theme/icons';

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

  componentDidUpdate(prevProps: RowDetailProps): void {
    const {
      row,
      form,
      onFormChange,
      compareRows,
      addToListId,
    } = this.props;
    if (onFormChange && (prevProps.compareRows !== compareRows || prevProps.row !== row)) {
      const foundRow = compareRows.find(RowDetail.hasRowId(row.id));

      onFormChange(
        form,
        {
          [fields.ORDER_NO]: foundRow ? foundRow.orderNo : null,
          [fields.LIST_ID]: row.id,
          [fields.ADD_TO_LIST_ID]: addToListId,
        }
      );
    }
  }

  render() {
    const { row, compareRows, handleSubmit } = this.props;
    const isSelected = compareRows.some(RowDetail.hasRowId(row.id));

    return (
      <ListItem
        key={row.id}
        dense
      >
        <ListItemText style={{ flex: 1 }}>{row.title}</ListItemText>
        <TextField
          name={fields.ORDER_NO}
          type="number"
          style={{ width: '100px', marginRight: '20px' }}
        />
        <IconButton
          onClick={handleSubmit}
        >
          <Icon
            name={isSelected ? ICON_CHECK : ICON_PLUS}
            active={isSelected}
            style={{ fontSize: 30 }}
          />
        </IconButton>
      </ListItem>
    );
  }
}

export default RowDetail;
