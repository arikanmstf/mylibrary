/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import * as React from 'react';
import logger from 'helpers/logger';
import t from 'helpers/i18n/Translate';
import PublicationAddToListForm from './PublicationAddToListForm';
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

  static getDerivedStateFromProps(props: PublicationAddToListProps) {
    const { fetchPublication, match: { params: { id } }, publication } = props;

    if (!publication || (publication && publication.id !== +id)) {
      fetchPublication(id);
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
        <Header title={t.get('PUBLICATION_DETAIL_ADD_LIST_HEADER')} />
        <Page>
          <RowList
            rows={rows}
            compareRows={publication ? publication.lists : null}
            addToListId={publication ? publication.id : null}
            detailComponent={PublicationAddToListForm}
          />
        </Page>
      </Screen>
    );
  }
}

export default PublicationAddToList;
