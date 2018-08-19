/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow

export type CardItem = {
  title: string,
  description?: ?string,
  image?: string,
  id: number,
}

export type RenderCardListItem = {
  item?: CardItem,
  index: number,
  separators: Function,
}

export type Pagination<V> = {
  content: Array<V>,
  totalPages: number,
};

export type CardListProps = {
  cards: Array<CardItem>,
};
