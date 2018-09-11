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
}

type CompareRow = {
  id: number,
}

export type RowListProps = {
  rows?: Array<Row>,
  compareRows: Array<CompareRow>,
};
