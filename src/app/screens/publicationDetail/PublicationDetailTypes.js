/**
 * Screen Types Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { ComponentType } from 'react';
import type { CardDetailProps } from 'ui/CardDetail/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';
import type { PageProps } from 'ui/Page/types';
import type { CardItem } from 'ui/CardList/types';

export type PublicationDetailProps = {
  CardDetail: ComponentType<CardDetailProps>,
  Screen: ComponentType<ScreenProps>,
  Header: ComponentType<HeaderProps>,
  Page: ComponentType<PageProps>,
  fetchData: Function,
  card?: CardItem,
};
