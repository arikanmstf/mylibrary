// @flow
import {
  BOOK_DETAIL,
  PUBLICATION_DETAIL,
  PUBLICATION_ADD_TO_LIST,
  WRITER_DETAIL,
  PUBLISHER_DETAIL,
} from './routeNames';

import {
  production,
  staticFiles,
  publicationCoverUrl,
  bookCoverUrl,
  publicationDetailUrlWithId,
} from './createUrl.common';

export {
  production,
  staticFiles,
  publicationCoverUrl,
  bookCoverUrl,
  publicationDetailUrlWithId,
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

export const writerDetailUrl = () => {
  return WRITER_DETAIL;
};

export const publisherDetailUrl = () => {
  return PUBLISHER_DETAIL;
};
