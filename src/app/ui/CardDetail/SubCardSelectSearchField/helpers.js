// @flow

import {
  SUB_CARD_TYPE_BOOK,
} from 'modules/card/constants';
import { getBookList, postBookDetailInsert } from 'modules/book/services';

export function setFetchTitleMethodBySubCardType(type: string) {
  let fetchData = null;

  if (type) {
    switch (type) {
      case SUB_CARD_TYPE_BOOK:
        fetchData = getBookList();
        break;
      default:
    }
  }

  return fetchData;
}

export function setAddMethodBySubCardType(type: string) {
  let addTitle = null;

  if (type) {
    switch (type) {
      case SUB_CARD_TYPE_BOOK:
        addTitle = postBookDetailInsert();
        break;
      default:
    }
  }

  return addTitle;
}

