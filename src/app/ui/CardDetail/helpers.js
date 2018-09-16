// @flow
import {
  staticFiles,
  publicationDetailUrl,
  publicationAddToListUrl,
  publicationCoverUrl,
  bookDetailUrl,
  bookCoverUrl,
} from 'constants/routes/createUrl';
import logger from 'helpers/logger';
import { CARD_TYPE_BOOK, CARD_TYPE_PUBLICATION } from 'modules/card/constants';

import type { CardItem } from 'modules/card/types';

export function setCardType(card: CardItem) {
  if (card) {
    switch (card.type) {
      case CARD_TYPE_PUBLICATION:
        this.getDetailUrl = publicationDetailUrl;
        this.addToListUrl = publicationAddToListUrl;
        this.imageUri = staticFiles()(publicationCoverUrl(card.id));
        break;
      case CARD_TYPE_BOOK:
        this.getDetailUrl = bookDetailUrl;
        this.addToListUrl = undefined;
        this.imageUri = staticFiles()(bookCoverUrl(card.id));
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
