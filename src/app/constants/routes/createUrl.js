// @flow
import {
  BOOK_DETAIL,
  BOOK_EDIT,
  PUBLICATION_DETAIL,
  PUBLICATION_ADD_TO_LIST,
  PUBLICATION_EDIT,
  WRITER_DETAIL,
  WRITER_EDIT,
  PUBLISHER_DETAIL,
  PUBLISHER_EDIT,
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

export const publicationEditUrl = (id: number) => {
  return PUBLICATION_EDIT.replace(':id', id);
};

export const bookDetailUrl = (id: number) => {
  return BOOK_DETAIL.replace(':id', id);
};

export const bookEditUrl = (id: number) => {
  return BOOK_EDIT.replace(':id', id);
};

export const writerDetailUrl = (id: number) => {
  return WRITER_DETAIL.replace(':id', id);
};

export const writerEditUrl = (id: number) => {
  return WRITER_EDIT.replace(':id', id);
};

export const publisherDetailUrl = (id: number) => {
  return PUBLISHER_DETAIL.replace(':id', id);
};

export const publisherEditUrl = (id: number) => {
  return PUBLISHER_EDIT.replace(':id', id);
};
