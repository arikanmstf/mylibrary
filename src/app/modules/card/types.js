// @flow
import type { Item } from 'helpers/api/types';

type Option = {
  to?: string,
  toId?: number,
  label: string,
}

type CardData = {
  key: string,
  value: any,
}

type BaseCard = {
  id?: string,
  title?: number,
  type: string,
}

export type CardItem = {|
  id: number,
  title: string,
  subTitle: string,
  description: ?string,
  type: string,
  lists: Array<Item>,
  options: Array<Option>,
  additionalData: Array<CardData>,
  baseCard: BaseCard,
  subCard: BaseCard,
  isRead?: ?boolean,
  isFavorite?: ?boolean,
  downloadUrl?: string,
  image?: string,
|}
