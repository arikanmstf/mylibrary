/**
 * Screen Types Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import * as React from 'react';
import type { RowListProps, Row } from 'ui/RowList/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';
import type { PageProps } from 'ui/Page/types';
import type { PublicationDetail } from 'helpers/api/types';

export type PublicationAddToListProps = {
  RowList: React.ComponentType<RowListProps>,
  Screen: React.ComponentType<ScreenProps>,
  Header: React.ComponentType<HeaderProps>,
  Page: React.ComponentType<PageProps>,
  rows?: Array<Row>,
  publication?: PublicationDetail,
  fetchLists: Function,
  fetchPublication: Function,
  toggleList: Function,
};
