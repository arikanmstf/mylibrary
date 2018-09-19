// @flow
import {
  staticFiles,
  publicationDetailUrl,
  publicationAddToListUrl,
  publicationCoverUrl,
  bookDetailUrl,
} from 'constants/routes/createUrl';
import logger from 'helpers/logger';
import { CARD_TYPE_BOOK, CARD_TYPE_PUBLICATION } from 'modules/card/constants';

import type { CardItem } from 'modules/card/types';

export function setCardType(card: CardItem, isDetailed: boolean) {
  if (card) {
    switch (card.type) {
      case CARD_TYPE_PUBLICATION:
        this.getDetailUrl = isDetailed ? bookDetailUrl : publicationDetailUrl;
        this.addToListUrl = publicationAddToListUrl;
        this.imageUri = staticFiles()(publicationCoverUrl(card.id));
        break;
      case CARD_TYPE_BOOK:
        this.getDetailUrl = isDetailed ? null : bookDetailUrl;
        this.addToListUrl = undefined;
        this.imageUri = null;
        break;
      default:
        logger.log(`card type not found: ${card.type}`);
        this.getDetailUrl = undefined;
        this.addToListUrl = undefined;
        this.imageUri = undefined;
    }
  }
}

export const defaultProps = {
  isDetailed: false,
};
