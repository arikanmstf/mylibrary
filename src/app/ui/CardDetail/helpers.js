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
} from 'modules/card/constants';
import t from 'helpers/i18n/Translate';

import type { CardItem } from 'modules/card/types';

const writerOptions = (card: CardItem) => {
  if (!card.writers) {
    return [];
  }
  return card.writers.map((writer) => ({
    to: writerDetailUrl(writer.id),
    toId: writer.id,
    label: `${t.get('CARD_DETAIL_WRITER_DETAIL')}: ${writer.name}`,
  }));
};

const createMoreOptions = (card: CardItem) => (
  {
    [CARD_TYPE_PUBLICATION]: [
      {
        to: bookDetailUrl(card.id),
        toId: card.id,
        label: t.get('CARD_DETAIL_BOOK_DETAIL'),
      },
      card.publisher
        ? {
          to: publisherDetailUrl(card.publisher.id),
          toId: card.publisher.id,
          label: t.get('CARD_DETAIL_PUBLISHER_DETAIL'),
        }
        : null,
    ],
    [CARD_TYPE_BOOK]: [],
    [CARD_TYPE_WRITER]: [],
    [CARD_TYPE_PUBLISHER]: [],
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

export const defaultProps = {
  isDetailed: false,
};
