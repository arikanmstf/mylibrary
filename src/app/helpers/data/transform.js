// @flow
import {
  CARD_TYPE_PUBLICATION,
  CARD_TYPE_BOOK,
  CARD_TYPE_WRITER,
  CARD_TYPE_PUBLISHER,
} from 'modules/card/constants';
import { BOOKS_I_READ, MY_FAVORITES } from 'modules/publication/constants';
import t from 'helpers/i18n/Translate';

import type { CardItem } from 'modules/card/types';
import type { Pagination } from 'ui/CardList/types';
import type {
  PublicationDetail,
  Item,
  BookDetail,
  WriterDetail,
  PublisherDetail,
} from 'helpers/api/types';
import type { Row } from 'ui/RowList/types';

export const transformPublicationToCard = (publication?: PublicationDetail): CardItem => {
  if (!publication) {
    return publication;
  }
  const writers = publication.writers.map((writer) => writer.name).join(', ');
  const publishers = publication.publisher.name ? ` - ${publication.publisher.name}` : '';

  return {
    title: publication.title,
    id: publication.id,
    bookId: publication.bookId,
    subHeader: `${writers}${publishers}`,
    isFavorite: publication.lists.some((list) => (list.code === MY_FAVORITES)),
    isRead: publication.lists.some((list) => (list.code === BOOKS_I_READ)),
    type: CARD_TYPE_PUBLICATION,
    description: publication.description,
    downloadUrl: publication.downloadUrl && publication.downloadUrl.length > 0 ? publication.downloadUrl : undefined,
    publisher: publication.publisher,
    writers: publication.writers,
    lists: publication.lists || [],
    additionalData: [
      {
        key: 'pageNumber',
        value: publication.pageNumber,
      },
      {
        key: 'ISBN',
        value: publication.isbn,
      },
    ],
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
    orderNo: item.orderNo,
  };
};

export const transformItemListToRowList = (result: Pagination<Item>): Array<Row> => {
  if (!result) {
    return result;
  }

  return result.content.map(transformItemToRow);
};

export const transformBookToCard = (book: BookDetail): CardItem => {
  if (!book) {
    return book;
  }

  const writers = book.writers.map((writer) => writer.name).join(', ');

  return {
    title: book.title,
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

export const transformWriterToCard = (writer: WriterDetail): CardItem => {
  if (!writer) {
    return writer;
  }

  return {
    title: writer.name,
    id: writer.id,
    description: writer.description,
    type: CARD_TYPE_WRITER,
    lists: [{
      id: 0,
      name: t.get('WRITER_DETAIL_BOOKS_OF_WRITER'),
      subItems: writer.books || [],
    }],
  };
};

export const transformPublisherToCard = (publisher: PublisherDetail): CardItem => {
  if (!publisher) {
    return publisher;
  }

  return {
    title: publisher.name,
    id: publisher.id,
    type: CARD_TYPE_PUBLISHER,
  };
};
