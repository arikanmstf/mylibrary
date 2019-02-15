/**
 * Screen Types Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import type { ComponentType } from 'react';
import type { Match } from 'react-router';

import type { RowListProps, Row } from 'ui/RowList/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';
import type { PageProps } from 'ui/Page/types';
import type { PublicationDetail } from 'helpers/api/types';

export type PublicationAddToListProps = {
  RowList: ComponentType<RowListProps>,
  Screen: ComponentType<ScreenProps>,
  Header: ComponentType<HeaderProps>,
  Page: ComponentType<PageProps>,
  PublicationAddToListForm: ComponentType<*>,
  rows?: Array<Row>,
  publication?: PublicationDetail,
  fetchLists: Function,
  fetchPublication: Function,
  match: Match,
};

export type SubmitSearchListFormRequest = {
  search: string,
};

export const SEARCH_SUBMIT_TIMEOUT = 500;
