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

type SubCard = {
  to?: string,
  toId?: number,
  label: string,
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
  subCard: SubCard,
  subCards: Array<SubCard>,
  isRead?: ?boolean,
  isFavorite?: ?boolean,
  downloadUrl?: string,
  image?: string,
|}
