/**
 * Screen Types Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { ComponentType } from 'react';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';
import type { PageProps } from 'ui/Page/types';
import type { CardListProps } from 'ui/CardList/types';
import type { CardItem } from 'modules/card/types';
import type { Row } from 'ui/RowList/types';

export type HomeProps = {
  Screen: ComponentType<ScreenProps>,
  Header: ComponentType<HeaderProps>,
  Page: ComponentType<PageProps>,
  CardList: ComponentType<CardListProps>,
  cards?: Array<CardItem>,
  rows?: Array<Row>,
  fetchPublications: Function,
  fetchLists: Function,
  toggleFavorite?: Function,
  toggleRead?: Function,
  listType?: string,
};

export type HomeState = {
  listType?: string,
};
