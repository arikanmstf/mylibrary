// @flow
import {
  publicationDetailUrl,
  publicationAddToListUrl,
  bookDetailUrl,
  publicationDetailUrlWithId,
} from 'constants/routes/createUrl';
import logger from 'helpers/logger';
import {
  CARD_TYPE_BOOK,
  CARD_TYPE_PUBLICATION,
} from 'modules/card/constants';

import type { CardItem } from 'modules/card/types';

export function setCardType(card: CardItem, isDetailed: boolean) {
  if (card) {
    switch (card.type) {
      case CARD_TYPE_PUBLICATION:
        this.getDetailUrl = isDetailed ? undefined : publicationDetailUrl;
        this.getDetailUrlWithId = isDetailed ? undefined : publicationDetailUrlWithId;
        this.addToListUrl = publicationAddToListUrl;
        break;
      case CARD_TYPE_BOOK:
        this.getDetailUrl = isDetailed ? undefined : bookDetailUrl;
        this.addToListUrl = undefined;
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
  isEdit: true,
};
