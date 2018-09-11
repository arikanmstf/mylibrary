// @flow
import type { Pagination, CardItem } from 'ui/CardList/types';
import type { PublicationDetail, Item } from 'helpers/api/types';
import type { Row } from 'ui/RowList/types';

const BOOKS_I_READ = 'BOOKS_I_READ';
const MY_FAVORITES = 'MY_FAVORITES';

export const transformPublicationToCard = (publication: PublicationDetail): CardItem => {
  if (!publication) {
    return publication;
  }
  const writers = publication.writers.map((writer) => writer.name).join(', ');
  const publishers = publication.publisher.name ? ` - ${publication.publisher.name}` : '';

  return {
    ...publication,
    title: publication.title,
    id: publication.id,
    subHeader: `${writers}${publishers}`,
    isFavorite: publication.lists.some((list) => (list.code === MY_FAVORITES)),
    isRead: publication.lists.some((list) => (list.code === BOOKS_I_READ)),
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

export const transformItemToRow = (item: Item): Row => {
  if (!item) {
    return item;
  }

  return {
    title: item.name,
    id: item.id,
    isSelected: false,
  };
};

export const transformItemListToRowList = (result: Array<Item>): Array<Row> => {
  if (!result) {
    return result;
  }

  return result.map(transformItemToRow);
};
