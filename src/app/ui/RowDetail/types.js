/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { Row, CompareRow } from 'ui/RowList/types';

export type SubmitFormType = {
  publicationId: number,
  listId: number,
  orderNo: number,
};

export type RowDetailProps = {
  row: Row,
  form: string,
  addToListId: number,
  compareRows: Array<CompareRow>,
  onFormInitialize?: Function,
  handleSubmit: Function,
};
