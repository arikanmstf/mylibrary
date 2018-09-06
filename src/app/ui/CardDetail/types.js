/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { CardItem } from 'ui/CardList/types';

export type CardDetailProps = {
  card: CardItem,
  index: number,
  isDetailed: boolean,
  toggleFavorite: Function,
  toggleRead: Function,
  history: Object, // TODO
};
