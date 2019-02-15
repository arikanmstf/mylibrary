/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import logger from 'helpers/logger';
import { ADD_TO_LIST_FORM_KEY } from 'constants/forms/addToList';

import type { RowListProps } from './types';

class RowList extends PureComponent<RowListProps> {
  renderRowList() {
    const {
      compareRows,
      addToListId,
      detailComponent: DetailComponent,
    } = this.props;
    logger.log('render: RowList', this.props);

    return (item) => {
      const row = item.item;
      return row && (
        <DetailComponent
          key={row.id}
          row={row}
          compareRows={compareRows}
          addToListId={addToListId}
          form={`${ADD_TO_LIST_FORM_KEY}__${row.id}`}
        />
      );
    };
  }

  render() {
    const { rows } = this.props;

    return (
      <FlatList
        data={rows}
        renderItem={this.renderRowList()}
      />
    );
  }
}

export default RowList;
