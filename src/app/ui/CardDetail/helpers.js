// @flow
import {
  publicationDetailUrl,
  publicationAddToListUrl,
  publicationEditUrl,
  bookDetailUrl,
  bookEditUrl,
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
