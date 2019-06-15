// @flow
import { CardTypeSetter } from 'modules/card/helpers/CardTypeSetter';

import type { CardItem } from 'modules/card/types';
import type { PublisherDetail } from 'helpers/api/types';
import type { Pagination } from 'ui/CardList/types';

export const transformPublisherToCard = (publisher: PublisherDetail): CardItem => {
  if (!publisher) {
    return publisher;
  }

  return CardTypeSetter.createFromPublisher(publisher);
};

export const transformPublisherListToCardList = (result: Pagination<PublisherDetail>): Pagination<CardItem> => {
  if (!result) {
    return result;
  }

  const newContent = result.content.map(transformPublisherToCard);

  return {
    totalPages: result.totalPages,
    content: newContent,
  };
};
