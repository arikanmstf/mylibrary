/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { List } from 'native-base';
import logger from 'helpers/logger';
import { ADD_TO_LIST_FORM_KEY } from 'constants/forms/addToList';

import type { RowListProps } from './types';

class RowList extends PureComponent<RowListProps> {
  renderRowList() {
    const {
      rows,
      compareRows,
      addToListId,
      detailComponent: DetailComponent,
    } = this.props;
    logger.log('render: RowList', this.props);

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
