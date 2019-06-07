// @flow
import { CARD_TYPE_PUBLICATION } from 'modules/card/constants';
import { BOOKS_I_READ, MY_FAVORITES, ADDITIONAL_DATA_MAP_KEYS } from 'modules/publication/constants';

import type { CardItem } from 'modules/card/types';
import type { Pagination } from 'ui/CardList/types';
import type { PublicationDetail } from 'helpers/api/types';

export const transformPublicationToCard = (publication?: PublicationDetail): CardItem => {
  if (!publication) {
    return publication;
  }
  const writers = publication.writers.map((writer) => writer.name).join(', ');
  const publishers = publication.publisher.name ? ` - ${publication.publisher.name}` : '';

  return {
    title: publication.title,
    id: publication.id,
    bookId: publication.bookId,
    subHeader: `${writers}${publishers}`,
    isFavorite: publication.lists.some((list) => (list.code === MY_FAVORITES)),
    isRead: publication.lists.some((list) => (list.code === BOOKS_I_READ)),
    type: CARD_TYPE_PUBLICATION,
    description: publication.description,
    downloadUrl: publication.downloadUrl && publication.downloadUrl.length > 0 ? publication.downloadUrl : undefined,
    publisher: publication.publisher,
    writers: publication.writers,
    lists: publication.lists || [],
    additionalData: [
      {
        [ADDITIONAL_DATA_MAP_KEYS.KEY]: 'pageNumber',
        [ADDITIONAL_DATA_MAP_KEYS.VALUE]: publication.pageNumber,
      },
      {
        [ADDITIONAL_DATA_MAP_KEYS.KEY]: 'ISBN',
        [ADDITIONAL_DATA_MAP_KEYS.VALUE]: publication.isbn,
      },
    ],
  };
};

export const transformPublicationListToCardList = (result: Pagination<PublicationDetail>): Pagination<CardItem> => {
  if (!result) {
    return result;
  }

  const newContent = result.content.map(transformPublicationToCard);

  return {
    totalPages: result.totalPages,
    content: newContent,
  };
};
