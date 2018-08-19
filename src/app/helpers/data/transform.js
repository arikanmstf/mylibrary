// @flow
import type { Pagination, CardItem } from 'ui/CardList/types';
import type { PublicationListItem } from 'helpers/api/types';

export const transformPublicationToCard = (result: Pagination<PublicationListItem>): Pagination<CardItem> => {
  if (!result) {
    return result;
  }

  const newContent = result.content.map((item) => ({
    title: item.title,
    id: item.id,
    description: item.writers,
  }));

  return {
    totalPages: result.totalPages,
    content: newContent,
  };
};
