// @flow
import {
  publicationDetailUrl,
  publicationAddToListUrl,
  publicationEditUrl,
  bookDetailUrl,
  bookEditUrl,
  writerDetailUrl,
  writerEditUrl,
  publisherDetailUrl,
  publisherEditUrl,
  publicationDetailUrlWithId,
} from 'constants/routes/createUrl';
import logger from 'helpers/logger';
import {
  CARD_TYPES,
} from 'modules/card/constants';

import type { CardItem } from 'modules/card/types';

export function setCardType(card: CardItem, isDetailed: boolean) {
  if (card) {
    switch (card.type) {
      case CARD_TYPES.PUBLICATION:
        this.getDetailUrl = publicationDetailUrl;
        this.getDetailUrlWithId = isDetailed ? undefined : publicationDetailUrlWithId;
        this.addToListUrl = publicationAddToListUrl;
        this.editUrl = publicationEditUrl;
        break;
      case CARD_TYPES.BOOK:
        this.getDetailUrl = bookDetailUrl;
        this.addToListUrl = undefined;
        this.editUrl = bookEditUrl;
        break;
      case CARD_TYPES.WRITER:
        this.getDetailUrl = writerDetailUrl;
        this.editUrl = writerEditUrl;
        break;
      case CARD_TYPES.PUBLISHER:
        this.getDetailUrl = publisherDetailUrl;
        this.editUrl = publisherEditUrl;
        break;
      default:
        logger.log(`card type not found: ${card.type}`);
        this.getDetailUrl = undefined;
        this.addToListUrl = undefined;
    }
  }
}

export const defaultProps = {
  isDetailed: false,
  isEdit: false,
};
