// @flow
import { CardTypeSetter } from 'modules/card/helpers/CardTypeSetter';

import type { CardItem } from 'modules/card/types';
import type { WriterDetail } from 'helpers/api/types';

export const transformWriterToCard = (writer: WriterDetail): CardItem => {
  if (!writer) {
    return writer;
  }

  return CardTypeSetter.createFromWriter(writer);
};
