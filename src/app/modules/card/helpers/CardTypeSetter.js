// @flow
import {
  CARD_TYPES,
  BASE_CARD_DATA_MAP_KEYS,
  BASE_CARD_TYPE_BOOK,
  BASE_CARD_TYPE_PUBLISHER,
  BASE_CARD_TYPE_WRITER,
} from 'modules/card/constants';
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
  PublisherDetail,
  UserDetail,
  WriterDetail,
  Item,
} from 'helpers/api/types';

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
const KEY_BASE_CARD = '_baseCard';
const KEY_SUB_CARD = '_subCard';
const KEY_SUB_TITLE = '_subTitle';

export class CardTypeSetter {
  [KEY_OPTIONS] = [];

  [KEY_ADDITIONAL_DATA] = [];

  [KEY_BASE_CARD] = {};

  [KEY_SUB_CARD] = {};

  [KEY_LISTS] = [];

  constructor(data: Object) {
    const {
      id, title, name, description,
    } = data;
    this.setTitle(title || name);
    this[KEY_ID] = id;
    this[KEY_DESCRIPTION] = description;
    this.setBaseCard(id, title || name);
  }

  addAdditionalData(key: string, value: any): CardTypeSetter {
    const o = [
      {
        [ADDITIONAL_DATA_MAP_KEYS.KEY]: key,
        [ADDITIONAL_DATA_MAP_KEYS.VALUE]: value,
      },
    ];

    this[KEY_ADDITIONAL_DATA] = this[KEY_ADDITIONAL_DATA].concat(o);
    return this;
  }

  addBookDetailToCardOptions(publication: PublicationDetail): CardTypeSetter {
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

  addPublisherDetailToCardOptions(publication: PublicationDetail): CardTypeSetter {
    const o = publication.publisher ? [
      {
        to: publisherDetailUrl(publication.publisher.id),
        toId: publication.publisher.id,
        label: t.get('CARD_DETAIL_PUBLISHER_DETAIL'),
      },
    ] : [];

    this[KEY_OPTIONS] = this[KEY_OPTIONS].concat(o);
    return this;
  }

  addCancelToCardOptions(): CardTypeSetter {
    const o = [
      {
        label: t.get('GENERAL_CANCEL'),
      },
    ];

    this[KEY_OPTIONS] = this[KEY_OPTIONS].concat(o);
    return this;
  }

  addWritersToCardOptions(data): CardTypeSetter {
    const o = data.writers ? data.writers.map((writer) => ({
      to: writerDetailUrl(writer.id),
      toId: writer ? writer.id : null,
      label: `${t.get('CARD_DETAIL_WRITER_DETAIL')}: ${writer.name}`,
    })) : [];

    this[KEY_OPTIONS] = this[KEY_OPTIONS].concat(o);
    return this;
  }

  addToLists(data: Item): CardTypeSetter {
    this[KEY_LISTS].push(data);
    return this;
  }

  setType(type: string): CardTypeSetter {
    this[KEY_TYPE] = type;
    return this;
  }

  setTitle(title: string): CardTypeSetter {
    this[KEY_TITLE] = title;
    return this;
  }

  setBaseCard(id: string, title: string, type: string): CardTypeSetter {
    this[KEY_BASE_CARD][BASE_CARD_DATA_MAP_KEYS.ID] = id;
    this[KEY_BASE_CARD][BASE_CARD_DATA_MAP_KEYS.TITLE] = title;
    this[KEY_BASE_CARD][BASE_CARD_DATA_MAP_KEYS.TYPE] = type;

    return this;
  }

  setSubCard(id: string, title: string, type: string): CardTypeSetter {
    this[KEY_SUB_CARD][BASE_CARD_DATA_MAP_KEYS.ID] = id;
    this[KEY_SUB_CARD][BASE_CARD_DATA_MAP_KEYS.TITLE] = title;
    this[KEY_SUB_CARD][BASE_CARD_DATA_MAP_KEYS.TYPE] = type;

    return this;
  }

  setSubTitle(title: string): CardTypeSetter {
    this[KEY_SUB_TITLE] = title;

    return this;
  }

  generateObject() {
    return Object.freeze({
      id: this[KEY_ID],
      title: this[KEY_TITLE],
      subTitle: this[KEY_SUB_TITLE],
      description: this[KEY_DESCRIPTION],
      type: this[KEY_TYPE],
      baseCard: this[KEY_BASE_CARD],
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
    const writerIds = book.writers ? book.writers.map((writer) => writer.id) : [];
    const writerNames = book.writers ? book.writers.map((writer) => writer.name) : [];
    const writers = writerNames.join(', ');
    const list = {
      id: 0,
      name: t.get('BOOK_DETAIL_PUBLICATIONS_OF_BOOK'),
      subItems: book.publications || [],
    };

    return cardTypeSetter
      .setType(CARD_TYPES.BOOK)
      .setSubCard(writerIds, writerNames, BASE_CARD_TYPE_WRITER)
      .setSubTitle(writers)
      .addWritersToCardOptions(book)
      .addCancelToCardOptions()
      .addToLists(list)
      .generateObject();
  }

  static createFromPublication(publication: PublicationDetail): CardItem {
    const cardTypeSetter = new CardTypeSetter(publication);
    const writers = publication.writers.map((writer) => writer.name).join(', ');
    const publisher = publication.publisher.name ? ` - ${publication.publisher.name}` : '';
    const publisherId = publication.publisher ? publication.publisher.id : '';
    const publisherName = publication.publisher ? publication.publisher.name : '';

    cardTypeSetter[KEY_LISTS] = publication.lists || [];
    cardTypeSetter[KEY_IS_FAVORITE] = publication.lists.some((list) => (list.code === MY_FAVORITES));
    cardTypeSetter[KEY_IS_READ] = publication.lists.some((list) => (list.code === BOOKS_I_READ));
    cardTypeSetter[KEY_DOWNLOAD_URL] = publication.downloadUrl && publication.downloadUrl.length > 0
      ? publication.downloadUrl : undefined;
    cardTypeSetter[KEY_IMAGE] = staticFiles()(publicationCoverUrl(publication.id));

    return cardTypeSetter
      .setType(CARD_TYPES.PUBLICATION)
      .setBaseCard(publication.bookId, publication.title, BASE_CARD_TYPE_BOOK)
      .setSubCard(publisherId, publisherName, BASE_CARD_TYPE_PUBLISHER)
      .setSubTitle(`${writers}${publisher}`)
      .addBookDetailToCardOptions(publication)
      .addPublisherDetailToCardOptions(publication)
      .addWritersToCardOptions(publication)
      .addCancelToCardOptions()
      .addAdditionalData('pageNumber', publication.pageNumber)
      .addAdditionalData('ISBN', publication.isbn)
      .generateObject();
  }

  static createFromItem(item: Item): CardItem {
    const cardTypeSetter = new CardTypeSetter(item);

    return cardTypeSetter
      .setTitle(item.name)
      .setType(CARD_TYPES.ITEM)
      .generateObject();
  }

  static createFromPublisher(publisher: PublisherDetail): CardItem {
    const cardTypeSetter = new CardTypeSetter(publisher);

    return cardTypeSetter
      .setTitle(publisher.name)
      .setType(CARD_TYPES.PUBLISHER)
      .generateObject();
  }

  static createFromUser(user: UserDetail): CardItem {
    const cardTypeSetter = new CardTypeSetter(user);

    return cardTypeSetter
      .setTitle(user.display_name)
      .setType(CARD_TYPES.USER)
      .generateObject();
  }

  static createFromWriter(writer: WriterDetail) {
    const cardTypeSetter = new CardTypeSetter(writer);
    const list = {
      id: 0,
      name: t.get('WRITER_DETAIL_BOOKS_OF_WRITER'),
      subItems: writer.books || [],
    };

    return cardTypeSetter
      .setTitle(writer.name)
      .setType(CARD_TYPES.WRITER)
      .addToLists(list)
      .generateObject();
  }
}
