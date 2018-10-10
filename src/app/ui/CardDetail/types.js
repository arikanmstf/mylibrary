/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { CardItem } from 'modules/card/types';
import type { RouterHistory } from 'react-router';
import type { StackNavigator } from 'react-navigation';

export type CardDetailProps = {
  card: CardItem,
  isDetailed: boolean,
  toggleFavorite?: Function,
  toggleRead?: Function,
  history?: RouterHistory,
  navigation?: StackNavigator,
  style?: Object,
};

export type CardDetailState = {
  anchorElRenderMore?: ?HTMLElement,
}

export type Option = {
  to?: string,
  toId?: number,
  label: string,
}
