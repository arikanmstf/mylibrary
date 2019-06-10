// @flow

export const CARD_TYPE_PUBLICATION = 'CARD_TYPE_PUBLICATION';
export const CARD_TYPE_BOOK = 'CARD_TYPE_BOOK';
export const CARD_TYPE_WRITER = 'CARD_TYPE_WRITER';
export const CARD_TYPE_PUBLISHER = 'CARD_TYPE_PUBLISHER';
export const CARD_TYPE_USER = 'CARD_TYPE_USER';

export const SUB_ITEM_TYPE_PUBLICATION = 'SUB_ITEM_TYPE_PUBLICATION';
export const SUB_ITEM_TYPE_BOOK = 'SUB_ITEM_TYPE_BOOK';

const CARD_METADATA_BOOK = 'CARD_METADATA_BOOK';
const CARD_METADATA_WRITER = 'writers';

export const cardTypeToCardMetaDataMap = new Map([
  [
    CARD_TYPE_BOOK,
    {
      subTitle: CARD_METADATA_WRITER,
    },
  ],
  [
    CARD_TYPE_PUBLICATION,
    {
      title: CARD_METADATA_BOOK,
      subTitle: CARD_METADATA_WRITER,
    },
  ],
]);
