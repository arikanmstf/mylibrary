/**
 * Screen Types Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import type { ComponentType } from 'react';
import type { CardDetailProps } from 'ui/CardDetail/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';
import type { PageProps } from 'ui/Page/types';
import type { CardItem } from 'modules/card/types';

export type BookDetailProps = {
  CardDetail: ComponentType<CardDetailProps>,
  Screen: ComponentType<ScreenProps>,
  Header: ComponentType<HeaderProps>,
  Page: ComponentType<PageProps>,
  fetchData: Function,
  card?: CardItem,
};
