// @flow
import type { Pagination, CardItem } from 'ui/CardList/types';
import type { PublicationDetail } from 'helpers/api/types';

const BOOKS_I_READ = 'BOOKS_I_READ';
const MY_FAVORITES = 'MY_FAVORITES';

export const transformPublicationToCard = (publication: PublicationDetail): CardItem => {
  if (!publication) {
    return result;
  }

  return {
    title: publication.title,
    id: publication.id,
    description: publication.writers.map((writer) => writer.name).join(', '),
    isFavorite: publication.lists.some((list) => (list.code === MY_FAVORITES)),
    isRead: publication.lists.some((list) => (list.code === BOOKS_I_READ)),
    text: publication.description,
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
