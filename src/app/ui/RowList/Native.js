/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import * as React from 'react';
import {
  List,
  ListItem,
  Left,
  Right,
  Icon,
} from 'native-base';
import { Text } from 'ui/native';

import type { RowListProps } from './types';

class RowList extends React.PureComponent<RowListProps> {
  static hasRowId(rowId) {
    return (compareRow) => (compareRow.id === rowId);
  }

  renderRowList() {
    const { rows, compareRows } = this.props;
    return rows && rows.map((row) => {
      const isSelected = compareRows.some(RowList.hasRowId(row.id));

      return (
        <ListItem
          selected={isSelected}
          key={row.id}
        >
          <Left>
            <Text>{row.title}</Text>
          </Left>
          <Right>
            <Icon name={isSelected ? 'checkmark' : 'add'} style={{ fontSize: 30 }} />
          </Right>
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
