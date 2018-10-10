/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { Row } from 'ui/RowList/types';
import type { Item } from 'helpers/api/types';

export type SubmitFormType = {
  addToListId: number,
  listId: number,
  orderNo?: number,
};

export type RowDetailProps = {
  row: Row,
  form: string,
  addToListId: number,
  compareRows: Array<Item>,
  onFormInitialize?: Function,
  handleSubmit: Function,
  onFormChange: Function,
};
