// @flow
import { CardTypeSetter } from 'modules/card/helpers/CardTypeSetter';

import type { CardItem } from 'modules/card/types';
import type { Pagination } from 'ui/CardList/types';
import type { PublicationDetail } from 'helpers/api/types';

export const transformPublicationToCard = (publication?: PublicationDetail): CardItem => {
  if (!publication) {
    return publication;
  }
  // const writers = publication.writers.map((writer) => writer.name).join(', ');
  // const publishers = publication.publisher.name ? ` - ${publication.publisher.name}` : '';

  const card = CardTypeSetter.createFromPublication(publication);
  console.log({ card });

  return card;

  // return {
  //   titleFromId: publication.bookId,
  //   subHeader: `${writers}${publishers}`,
  // };
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
