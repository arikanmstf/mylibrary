/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import * as React from 'react';
import logger from 'helpers/logger';
import t from 'helpers/i18n/Translate';
import type { PublicationAddToListProps } from './PublicationAddToListTypes';

class PublicationAddToList extends React.Component<PublicationAddToListProps> {
  componentDidMount() {
    const {
      fetchLists,
      fetchPublication,
      match: { params: { id } },
      publication,
      rows,
    } = this.props;

    if (!publication) {
      fetchPublication(id);
    }

    if (!rows) {
      fetchLists();
    }
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      RowList,
      rows,
      publication,
    } = this.props;
    logger.log('render: PublicationAddToList');

    return (
      <Screen>
        <Header title={t.get('HOME_TITLE')} />
        <Page>
          <RowList
            rows={rows}
            compareRows={publication ? publication.lists : []}
          />
        </Page>
      </Screen>
    );
  }
}

export default PublicationAddToList;
