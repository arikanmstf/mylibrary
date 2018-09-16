// @flow
import getConfig from 'config/get';
import {
  BOOK_DETAIL,
  PUBLICATION_DETAIL,
  PUBLICATION_ADD_TO_LIST,
} from './routeNames';

export const production = () => {
  const { productionURL } = getConfig();
  return (url: string) => {
    return `${productionURL}${url}`;
  };
};

export const staticFiles = () => {
  const { staticFilesURL } = getConfig();
  return (url: string) => {
    return `${staticFilesURL}${url}`;
  };
};

export const publicationDetailUrl = (id: number) => {
  return PUBLICATION_DETAIL.replace(':id', id);
};

export const publicationAddToListUrl = (id: number) => {
  return PUBLICATION_ADD_TO_LIST.replace(':id', id);
};

export const publicationCoverUrl = (id: number) => {
  return `/img/cover/${id}.jpg`;
};

export const bookDetailUrl = (id: number) => {
  return BOOK_DETAIL.replace(':id', id);
};

export const bookCoverUrl = (id: number) => {
  return `/img/cover/${id}.jpg`;
};
