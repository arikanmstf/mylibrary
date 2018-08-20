// @flow
import type { Pagination, CardItem } from 'ui/CardList/types';
import type { PublicationDetail } from 'helpers/api/types';

const BOOKS_I_READ = 'BOOKS_I_READ';
const MY_FAVORITES = 'MY_FAVORITES';

export const transformPublicationToCard = (result: Pagination<PublicationDetail>): Pagination<CardItem> => {
  if (!result) {
    return result;
  }

  const newContent = result.content.map((item) => ({
    title: item.title,
    id: item.id,
    description: item.writers.map((writer) => writer.name).join(', '),
    isFavorite: item.lists.some((list) => (list.code === MY_FAVORITES)),
    isRead: item.lists.some((list) => (list.code === BOOKS_I_READ)),
  }));

  return {
    totalPages: result.totalPages,
    content: newContent,
  };
};
