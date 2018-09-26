// @flow
import {
  staticFiles,
  publicationDetailUrl,
  publicationAddToListUrl,
  publicationCoverUrl,
  bookDetailUrl,
  publisherDetailUrl,
  writerDetailUrl,
} from 'constants/routes/createUrl';
import logger from 'helpers/logger';
import {
  CARD_TYPE_BOOK,
  CARD_TYPE_PUBLICATION,
  CARD_TYPE_WRITER,
  CARD_TYPE_PUBLISHER,
} from 'modules/card/constants';
import type { CardItem } from 'modules/card/types';

const writerOptions = (card: CardItem) => {
  if (!card.writers) {
    return [];
  }
  return card.writers.map((writer) => ({
    to: writerDetailUrl(writer.id),
    toId: writer.id,
    label: `Writer detail: ${writer.name}`,
  }));
};

const createMoreOptions = (card: CardItem) => (
  {
    [CARD_TYPE_PUBLICATION]: [
      {
        to: bookDetailUrl(card.id),
        toId: card.id,
        label: 'Book detail', // TODO: i18n
      },
      card.publisher
        ? {
          to: publisherDetailUrl(card.publisher.id),
          toId: card.publisher.id,
          label: 'Publisher detail',
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
        label: 'Cancel',
      },
    ])
);

export function setCardType(card: CardItem, isDetailed: boolean) {
  if (card) {
    switch (card.type) {
      case CARD_TYPE_PUBLICATION:
        this.getDetailUrl = isDetailed ? undefined : publicationDetailUrl;
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
