// @flow
import { CARD_TYPE_WRITER } from 'modules/card/constants';
import t from 'helpers/i18n/Translate';

import type { CardItem } from 'modules/card/types';
import type { WriterDetail } from 'helpers/api/types';

export const transformWriterToCard = (writer: WriterDetail): CardItem => {
  if (!writer) {
    return writer;
  }

  return {
    title: writer.name,
    titleFromId: writer.id,
    id: writer.id,
    description: writer.description,
    type: CARD_TYPE_WRITER,
    lists: [{
      id: 0,
      name: t.get('WRITER_DETAIL_BOOKS_OF_WRITER'),
      subItems: writer.books || [],
    }],
  };
};
