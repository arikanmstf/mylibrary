// @flow
import type { PublisherDetail, WriterDetail, Item } from 'helpers/api/types';

export type CardItem = {|
  title: string,
  id: number,
  subHeader?: ?string,
  isFavorite: ?boolean,
  isRead: ?boolean,
  type: string,
  description?: string,
  image?: string,
  downloadUrl?: string,
  publisher?: PublisherDetail,
  writers?: Array<WriterDetail>,
  lists?: Array<Item>,
|}
