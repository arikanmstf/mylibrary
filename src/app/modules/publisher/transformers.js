// @flow
import { CardTypeSetter } from 'modules/card/helpers/CardTypeSetter';

import type { CardItem } from 'modules/card/types';
import type { PublisherDetail } from 'helpers/api/types';

export const transformPublisherToCard = (publisher: PublisherDetail): CardItem => {
  if (!publisher) {
    return publisher;
  }

  return CardTypeSetter.createFromPublisher(publisher);
};
