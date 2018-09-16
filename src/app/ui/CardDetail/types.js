/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { CardItem } from 'modules/card/types';

export type CardDetailProps = {
  card?: CardItem,
  isDetailed: boolean,
  toggleFavorite: Function,
  toggleRead: Function,
  history: Object, // TODO
};
