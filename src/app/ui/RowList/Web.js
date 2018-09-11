/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

import type { RowListProps } from './types';

class RowList extends React.PureComponent<RowListProps> {
  static hasRowId(rowId) {
    return (compareRow) => (compareRow.id === rowId);
  }

  renderRowList() {
    const { rows, compareRows, onRowClick } = this.props;

    return rows && rows.map((row) => {
      const isSelected = compareRows.some(RowList.hasRowId(row.id));
      return (
        <ListItem
          key={row.id}
          onClick={() => { if (onRowClick) { onRowClick(row); } }}
          button
          dense
        >
          <ListItemText>{row.title}</ListItemText>
          {isSelected ? <CheckIcon color="primary" /> : <AddIcon />}
        </ListItem>
      );
    });
  }

  render() {
    return (
      <List>
        {this.renderRowList()}
      </List>
    );
  }
}

export default RowList;
