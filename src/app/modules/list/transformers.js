// @flow
import type { Pagination } from 'ui/CardList/types';
import type { Item } from 'helpers/api/types';
import type { Row } from 'ui/RowList/types';

export const transformItemToRow = (item: Item): Row => {
  if (!item) {
    return item;
  }

  return {
    title: item.name,
    id: item.id,
    isSelected: false,
    orderNo: item.orderNo,
  };
};

export const transformItemListToRowList = (result: Pagination<Item>): Array<Row> => {
  if (!result) {
    return result;
  }

  return result.content.map(transformItemToRow);
};
