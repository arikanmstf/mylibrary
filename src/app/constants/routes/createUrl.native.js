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

export const publicationDetailUrl = () => {
  return PUBLICATION_DETAIL;
};

export const publicationAddToListUrl = () => {
  return PUBLICATION_ADD_TO_LIST;
};

export const bookDetailUrl = () => {
  return BOOK_DETAIL;
};
