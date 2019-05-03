// @flow
import { CARD_TYPE_PUBLISHER } from 'modules/card/constants';

import type { CardItem } from 'modules/card/types';
import type { PublisherDetail } from 'helpers/api/types';

export const transformPublisherToCard = (publisher: PublisherDetail): CardItem => {
  if (!publisher) {
    return publisher;
  }

  return {
    title: publisher.name,
    id: publisher.id,
    type: CARD_TYPE_PUBLISHER,
  };
};
