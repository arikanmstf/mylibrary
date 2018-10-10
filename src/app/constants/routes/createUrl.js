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

export const publicationDetailUrl = (id: number) => {
  return PUBLICATION_DETAIL.replace(':id', id);
};

export const publicationAddToListUrl = (id: number) => {
  return PUBLICATION_ADD_TO_LIST.replace(':id', id);
};

export const bookDetailUrl = (id: number) => {
  return BOOK_DETAIL.replace(':id', id);
};

export const writerDetailUrl = (id: number) => {
  return WRITER_DETAIL.replace(':id', id);
};

export const publisherDetailUrl = (id: number) => {
  return PUBLISHER_DETAIL.replace(':id', id);
};
