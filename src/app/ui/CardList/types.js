/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { CardItem } from 'modules/card/types';

export type RenderCardListItem = {
  item?: CardItem,
}

export type Pagination<V> = {
  content: Array<V>,
  totalPages: number,
};

export type CardListProps = {
  cards?: Array<CardItem>,
  isLoaderVisible?: boolean,
  search?: string,
  type?: string,
  addCards?: Function,
  fetchPublications?: Function,
  updateListType?: Function,
  toggleRead?: Function,
  toggleFavorite?: Function,
};
