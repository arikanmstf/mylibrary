// @flow
import type { Item } from 'helpers/api/types';
import type { Option } from './helpers/types';

type CardData = {
  key: string,
  value: any,
}

type SubCard = {}

export type CardItem = {|
  id: number,
  title: string,
  description: ?string,
  type: string,
  lists: Array<Item>,
  options: Array<Option>,
  additionalData: Array<CardData>,
  subCard: SubCard,
  isRead?: ?boolean,
  isFavorite?: ?boolean,
  downloadUrl?: string,
  image?: string,
|}
