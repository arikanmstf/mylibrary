/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
export type Row = {
  title: string,
  id: number,
  isSelected: boolean,
  orderNo: number,
}

export type CompareRow = {
  id: number,
}

export type RowListProps = {
  rows?: Array<Row>,
  addToListId: number,
  compareRows: Array<CompareRow>,
};
