// @flow
import { CARD_TYPE_BOOK, CARD_TYPE_PUBLICATION } from 'modules/card/constants';
import { BOOKS_I_READ, MY_FAVORITES, ADDITIONAL_DATA_MAP_KEYS } from 'modules/publication/constants';
import t from 'helpers/i18n/Translate';
import {
  staticFiles,
  bookDetailUrl,
  writerDetailUrl,
  publisherDetailUrl,
  publicationCoverUrl,
} from 'constants/routes/createUrl';

import type { CardItem } from 'modules/card/types';
import type {
  BookDetail,
  PublicationDetail,
} from 'helpers/api/types';
import type { Option } from './types';

const KEY_ID = '_id';
const KEY_TITLE = '_title';
const KEY_DESCRIPTION = '_description';
const KEY_TYPE = '_type';
const KEY_LISTS = '_lists';
const KEY_OPTIONS = '_options';
const KEY_IS_FAVORITE = '_isFavorite';
const KEY_IS_READ = '_isRead';
const KEY_ADDITIONAL_DATA = '_additionalData';
const KEY_DOWNLOAD_URL = '_downloadUrl';
const KEY_IMAGE = '_image';
const KEY_SUB_CARD = '_subCard';

export class CardTypeSetter {
  [KEY_OPTIONS] = [];

  [KEY_ADDITIONAL_DATA] = [];

  constructor(data: Object) {
    const { id, title, description } = data;
    this[KEY_ID] = id;
    this[KEY_TITLE] = title;
    this[KEY_DESCRIPTION] = description;
  }

  addAdditionalData(key: string, value: any): Array<Option> {
    const o = [
      {
        [ADDITIONAL_DATA_MAP_KEYS.KEY]: key,
        [ADDITIONAL_DATA_MAP_KEYS.VALUE]: value,
      },
    ];

    this[KEY_ADDITIONAL_DATA] = this[KEY_ADDITIONAL_DATA].concat(o);
    return this;
  }

  addBookDetailToCardOptions(publication: PublicationDetail): Array<Option> {
    const o = [
      {
        to: bookDetailUrl(publication.bookId),
        toId: publication.bookId,
        label: t.get('CARD_DETAIL_BOOK_DETAIL'),
      },
    ];

    this[KEY_OPTIONS] = this[KEY_OPTIONS].concat(o);
    return this;
  }

  addPublisherDetailToCardOptions(publication: PublicationDetail): Array<Option> {
    const o = [
      {
        to: publisherDetailUrl(publication.publisher.id),
        toId: publication.publisher ? publication.publisher.id : null,
        label: t.get('CARD_DETAIL_PUBLISHER_DETAIL'),
      },
    ];

    this[KEY_OPTIONS] = this[KEY_OPTIONS].concat(o);
    return this;
  }

  addCancelToCardOptions(): Array<Option> {
    const o = [
      {
        label: t.get('GENERAL_CANCEL'),
      },
    ];

    this[KEY_OPTIONS] = this[KEY_OPTIONS].concat(o);
    return this;
  }

  addWritersToCardOptions(data): Array<Option> {
    const o = data.writers.map((writer) => ({
      to: writerDetailUrl(writer.id),
      toId: writer ? writer.id : null,
      label: `${t.get('CARD_DETAIL_WRITER_DETAIL')}: ${writer.name}`,
    }));

    this[KEY_OPTIONS] = this[KEY_OPTIONS].concat(o);
    return this;
  }

  generateObject() {
    return Object.freeze({
      id: this[KEY_ID],
      title: this[KEY_TITLE],
      description: this[KEY_DESCRIPTION],
      type: this[KEY_TYPE],
      subCard: this[KEY_SUB_CARD],
      lists: this[KEY_LISTS],
      options: this[KEY_OPTIONS],
      isFavorite: this[KEY_IS_FAVORITE],
      isRead: this[KEY_IS_READ],
      additionalData: this[KEY_ADDITIONAL_DATA],
      downloadUrl: this[KEY_DOWNLOAD_URL],
      image: this[KEY_IMAGE],
    });
  }

  static createFromBook(book: BookDetail): CardItem {
    const cardTypeSetter = new CardTypeSetter(book);
    cardTypeSetter[KEY_TYPE] = CARD_TYPE_BOOK;
    cardTypeSetter[KEY_LISTS] = [{
      name: t.get('BOOK_DETAIL_PUBLICATIONS_OF_BOOK'),
      id: 0,
      subItems: book.publications || [],
    }];

    return cardTypeSetter
      .addWritersToCardOptions(book)
      .addCancelToCardOptions()
      .generateObject();
  }

  static createFromPublication(publication: PublicationDetail): CardItem {
    const cardTypeSetter = new CardTypeSetter(publication);
    cardTypeSetter[KEY_TYPE] = CARD_TYPE_PUBLICATION;
    cardTypeSetter[KEY_LISTS] = publication.lists || [];
    cardTypeSetter[KEY_IS_FAVORITE] = publication.lists.some((list) => (list.code === MY_FAVORITES));
    cardTypeSetter[KEY_IS_READ] = publication.lists.some((list) => (list.code === BOOKS_I_READ));
    cardTypeSetter[KEY_DOWNLOAD_URL] = publication.downloadUrl && publication.downloadUrl.length > 0
      ? publication.downloadUrl : undefined;
    cardTypeSetter[KEY_IMAGE] = staticFiles()(publicationCoverUrl(publication.id));
    cardTypeSetter[KEY_SUB_CARD] = [];

    return cardTypeSetter
      .addBookDetailToCardOptions(publication)
      .addPublisherDetailToCardOptions(publication)
      .addWritersToCardOptions(publication)
      .addCancelToCardOptions()
      .addAdditionalData('pageNumber', publication.pageNumber)
      .addAdditionalData('ISBN', publication.isbn)
      .generateObject();
  }
}
