// @flow
import {
  BOOK_DETAIL,
  PUBLICATION_DETAIL,
  PUBLICATION_ADD_TO_LIST,
} from './routeNames';

import {
  production,
  staticFiles,
  publicationCoverUrl,
  bookCoverUrl,
} from './createUrl.common';

export {
  production,
  staticFiles,
  publicationCoverUrl,
  bookCoverUrl,
};

export const publicationDetailUrl = (id: number) => {
  return PUBLICATION_DETAIL.replace(':id', id);
};

export const publicationAddToListUrl = (id: number) => {
  return PUBLICATION_ADD_TO_LIST.replace(':id', id);
};

export const bookDetailUrl = (id: number) => {
  return BOOK_DETAIL.replace(':id', id);
};
