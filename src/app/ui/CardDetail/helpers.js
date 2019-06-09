// @flow
import {
  staticFiles,
  publicationDetailUrl,
  publicationAddToListUrl,
  publicationCoverUrl,
  bookDetailUrl,
  publisherDetailUrl,
  writerDetailUrl,
  publicationDetailUrlWithId,
} from 'constants/routes/createUrl';
import logger from 'helpers/logger';
import {
  CARD_TYPE_BOOK,
  CARD_TYPE_PUBLICATION,
  CARD_TYPE_WRITER,
  CARD_TYPE_PUBLISHER,
  CARD_TYPE_USER,
} from 'modules/card/constants';
import t from 'helpers/i18n/Translate';
import { getBookList } from 'modules/book/services';

import type { CardItem } from 'modules/card/types';
import type { Option } from './types';

const writerOptions = (card: CardItem) => {
  if (!card.writers) {
    return [];
  }
  return card.writers.map((writer) => ({
    to: writerDetailUrl(writer.id),
    toId: writer ? writer.id : null,
    label: `${t.get('CARD_DETAIL_WRITER_DETAIL')}: ${writer.name}`,
  }));
};

const createMoreOptions = (card: CardItem): Array<Option> => (
  {
    [CARD_TYPE_PUBLICATION]: [
      {
        to: bookDetailUrl(card.bookId),
        toId: card.bookId,
        label: t.get('CARD_DETAIL_BOOK_DETAIL'),
      },
      card.publisher
        ? {
          to: publisherDetailUrl(card.publisher.id),
          toId: card.publisher ? card.publisher.id : null,
          label: t.get('CARD_DETAIL_PUBLISHER_DETAIL'),
        }
        : null,
    ],
    [CARD_TYPE_BOOK]: [],
    [CARD_TYPE_WRITER]: [],
    [CARD_TYPE_PUBLISHER]: [],
    [CARD_TYPE_USER]: [],
  }[card.type]
    .filter((x) => x)
    .concat(writerOptions(card))
    .concat([
      {
        label: t.get('GENERAL_CANCEL'),
      },
    ])
);

export function setCardType(card: CardItem, isDetailed: boolean) {
  if (card) {
    switch (card.type) {
      case CARD_TYPE_PUBLICATION:
        this.getDetailUrl = isDetailed ? undefined : publicationDetailUrl;
        this.getDetailUrlWithId = isDetailed ? undefined : publicationDetailUrlWithId;
        this.addToListUrl = publicationAddToListUrl;
        this.imageUri = staticFiles()(publicationCoverUrl(card.id));
        break;
      case CARD_TYPE_BOOK:
        this.getDetailUrl = isDetailed ? undefined : bookDetailUrl;
        this.addToListUrl = undefined;
        this.imageUri = undefined;
        break;
      default:
        logger.log(`card type not found: ${card.type}`);
        this.getDetailUrl = undefined;
        this.addToListUrl = undefined;
        this.imageUri = undefined;
    }
    this.moreOptions = createMoreOptions(card);
  }
}

export function setFetchTitleMethodByType(card: CardItem) {
  let fetchData = null;

  if (card) {
    switch (card.type) {
      case CARD_TYPE_PUBLICATION:
        fetchData = getBookList();
        break;
      default:
    }
  }

  return fetchData;
}

export const defaultProps = {
  isDetailed: false,
  isEdit: true,
};
