// @flow
import { CardTypeSetter } from 'modules/card/helpers/CardTypeSetter';

import type { CardItem } from 'modules/card/types';
import type { BookDetail } from 'helpers/api/types';
import type { Pagination } from 'ui/CardList/types';

export const transformBookToCard = (book: BookDetail): CardItem => {
  if (!book) {
    return book;
  }

  return CardTypeSetter.createFromBook(book);
};

export const transformBookListToCardList = (result: Pagination<BookDetail>): Pagination<CardItem> => {
  if (!result) {
    return result;
  }

  const newContent = result.content.map(transformBookToCard);

  return {
    totalPages: result.totalPages,
    content: newContent,
  };
};
