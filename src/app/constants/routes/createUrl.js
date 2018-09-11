// @flow
import {
  PUBLICATION_DETAIL,
  PUBLICATION_ADD_TO_LIST,
} from './routeNames';

export const publicationDetailUrl = (id: number) => {
  return PUBLICATION_DETAIL.replace(':id', id);
};

export const publicationAddToListUrl = (id: number) => {
  return PUBLICATION_ADD_TO_LIST.replace(':id', id);
};
