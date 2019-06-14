// @flow
import { CardTypeSetter } from 'modules/card/helpers/CardTypeSetter';

import type { CardItem } from 'modules/card/types';
import type { Pagination } from 'ui/CardList/types';
import type { PublicationDetail } from 'helpers/api/types';

export const transformPublicationToCard = (publication?: PublicationDetail): CardItem => {
  if (!publication) {
    return publication;
  }

  return CardTypeSetter.createFromPublication(publication);
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
