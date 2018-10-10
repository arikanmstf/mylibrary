// @flow
import getConfig from 'config/get';
import {
  PUBLICATION_DETAIL,
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

export const publicationCoverUrl = (id: number) => {
  return `/img/cover/${id}.jpg`;
};

export const bookCoverUrl = (id: number) => {
  return `/img/cover/${id}.jpg`;
};

export const publicationDetailUrlWithId = (id: number) => {
  return PUBLICATION_DETAIL.replace(':id', id);
};
