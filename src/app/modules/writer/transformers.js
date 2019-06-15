// @flow
import { CardTypeSetter } from 'modules/card/helpers/CardTypeSetter';

import type { CardItem } from 'modules/card/types';
import type { WriterDetail } from 'helpers/api/types';
import type { Pagination } from 'ui/CardList/types';

export const transformWriterToCard = (writer: WriterDetail): CardItem => {
  if (!writer) {
    return writer;
  }

  return CardTypeSetter.createFromWriter(writer);
};

export const transformWriterListToCardList = (result: Pagination<WriterDetail>): Pagination<CardItem> => {
  if (!result) {
    return result;
  }

  const newContent = result.content.map(transformWriterToCard);

  return {
    totalPages: result.totalPages,
    content: newContent,
  };
};
