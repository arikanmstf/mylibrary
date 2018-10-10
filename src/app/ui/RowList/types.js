/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { ComponentType } from 'react';
import type { Item } from 'helpers/api/types';

export type Row = {
  title: string,
  id: number,
  isSelected: boolean,
  orderNo: number,
}

export type RowListProps = {
  rows?: Array<Row>,
  addToListId: number,
  compareRows: Array<Item>,
  detailComponent: ComponentType<*>,
};
