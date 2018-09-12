/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import * as React from 'react';
import List from '@material-ui/core/List';
import { ADD_TO_LIST_FORM_KEY } from 'constants/forms/addToList';

import type { RowListProps } from './types';

class RowList extends React.PureComponent<RowListProps> {
  renderRowList() {
    const {
      rows,
      compareRows,
      addToListId,
      detailComponent: DetailComponent,
    } = this.props;

    return rows && compareRows && rows.map((row) => {
      return (
        <DetailComponent
          key={row.id}
          row={row}
          compareRows={compareRows}
          addToListId={addToListId}
          form={`${ADD_TO_LIST_FORM_KEY}__${row.id}`}
        />
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
