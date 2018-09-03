// @flow
import { PUBLICATION_DETAIL } from './routeNames';

export const publicationDetailUrl = (id: number) => {
  return PUBLICATION_DETAIL.replace(':id', id);
};
