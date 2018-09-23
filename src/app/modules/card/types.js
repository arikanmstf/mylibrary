// @flow
import type { Publisher } from 'helpers/api/types';

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
  publisher?: Publisher,
|}
