/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import t from 'helpers/i18n/Translate';
import type { PublicationAddToListProps } from './PublicationAddToListTypes';

class PublicationAddToList extends PureComponent<PublicationAddToListProps> {
  componentDidMount() {
    const {
      fetchLists,
      fetchPublication,
      match,
      publication,
      rows,
    } = this.props;

    if (!publication) {
      fetchPublication(match.params.id);
    }

    if (!rows) {
      fetchLists();
    }
  }

  static getDerivedStateFromProps(props: PublicationAddToListProps) {
    const {
      fetchPublication,
      match,
      publication,
    } = props;
    const { id } = match.params;

    if (!publication || (publication && publication.id !== +id)) {
      fetchPublication(id);
    }

    return null;
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      RowList,
      PublicationAddToListForm,
      rows,
      publication,
    } = this.props;
    logger.log('render: PublicationAddToList');

    return (
      <Screen>
        <Header title={t.get('PUBLICATION_DETAIL_ADD_LIST_HEADER')} />
        <Page>
          <RowList
            rows={rows}
            compareRows={publication ? publication.lists : []}
            addToListId={publication ? publication.id : 0}
            detailComponent={PublicationAddToListForm}
          />
        </Page>
      </Screen>
    );
  }
}

export default PublicationAddToList;
