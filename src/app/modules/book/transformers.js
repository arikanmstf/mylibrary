// @flow
import { CARD_TYPE_BOOK } from 'modules/card/constants';
import t from 'helpers/i18n/Translate';

import type { CardItem } from 'modules/card/types';
import type { BookDetail } from 'helpers/api/types';
import type { Pagination } from 'ui/CardList/types';

export const transformBookToCard = (book: BookDetail): CardItem => {
  if (!book) {
    return book;
  }

  const writers = book.writers ? book.writers.map((writer) => writer.name).join(', ') : '';

  return {
    title: book.title,
    titleFromId: book.id,
    id: book.id,
    subHeader: `${writers}`,
    type: CARD_TYPE_BOOK,
    description: book.description,
    writers: book.writers,
    lists: [{
      name: t.get('BOOK_DETAIL_PUBLICATIONS_OF_BOOK'),
      id: 0,
      subItems: book.publications || [],
    }],
  };
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
