/**
 * Screen Types Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';
import type { PageProps } from 'ui/Page/types';
import type { CardListProps, CardItem } from 'ui/CardList/types';
import type { Row } from 'ui/RowList/types';

export type HomeProps = {
  Screen: React.ComponentType<ScreenProps>,
  Header: React.ComponentType<HeaderProps>,
  Page: React.ComponentType<PageProps>,
  CardList: React.ComponentType<CardListProps>,
  cards?: Array<CardItem>,
  rows?: Array<Row>,
  fetchPublications: Function,
  fetchLists: Function,
};
