/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow

export type CardItem = {
  title: string,
  subHeader?: ?string,
  image?: string,
  id: number,
  isFavorite: boolean,
  isRead: boolean,
  description: string,
}

export type RenderCardListItem = {
  item?: CardItem,
}

export type Pagination<V> = {
  content: Array<V>,
  totalPages: number,
};

export type CardListProps = {
  cards?: Array<CardItem>,
  isLoaderVisible: boolean,
  search: string,
  addCards: Function,
  fetchPublications: Function,
};
