// @flow
import type { Item } from 'helpers/api/types';
import type { ComponentType } from 'react';
import type { Match } from 'react-router-dom';
import type { StackNavigator } from 'react-navigation';
import type { CardDetailProps } from 'ui/CardDetail/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';
import type { PageProps } from 'ui/Page/types';

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

type BaseCardMultiple = {
  id?: Array<string>,
  title?: Array<number>,
  type: Array<string>,
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
  subCard: BaseCard | BaseCardMultiple,
  isRead?: ?boolean,
  isFavorite?: ?boolean,
  downloadUrl?: string,
  image?: string,
|}

export type CardDetailPageProps = {
  CardDetail: ComponentType<CardDetailProps>,
  Screen: ComponentType<ScreenProps>,
  Header: ComponentType<HeaderProps>,
  Page: ComponentType<PageProps>,
  fetchData: Function,
  card: CardItem,
  match: Match,
  navigation: StackNavigator,
  isEditMode: boolean,
  toggleFavorite?: Function,
  toggleRead?: Function,
};
