// @flow

import {
  BASE_CARD_TYPE_BOOK,
  BASE_CARD_TYPE_WRITER,
  BASE_CARD_TYPE_PUBLISHER,
} from 'modules/card/constants';
import { getBookList, postBookDetailInsert } from 'modules/book/services';
import { getWriterList, postWriterDetailInsert } from 'modules/writer/services';
import { getPublisherList } from 'modules/publisher/services';

export function setFetchTitleMethodBySubCardType(type: string) {
  let fetchData = null;

  if (type) {
    switch (type) {
      case BASE_CARD_TYPE_BOOK:
        fetchData = getBookList();
        break;
      case BASE_CARD_TYPE_WRITER:
        fetchData = getWriterList();
        break;
      case BASE_CARD_TYPE_PUBLISHER:
        fetchData = getPublisherList();
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
      case BASE_CARD_TYPE_BOOK:
        addTitle = postBookDetailInsert();
        break;
      case BASE_CARD_TYPE_WRITER:
        addTitle = postWriterDetailInsert();
        break;
      default:
    }
  }

  return addTitle;
}

