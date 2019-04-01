/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import logger from 'helpers/logger';
import t from 'helpers/i18n/Translate';
import fields from 'constants/forms/searchList';

import PublicationAddToListForm from './publicationAddToListForm';
import AddListForm from './addListForm';
import { SEARCH_SUBMIT_TIMEOUT } from './PublicationAddToListTypes';
import { submitSearchForm } from './publicationAddToListActions';

import type { PublicationAddToListProps } from './PublicationAddToListTypes';

class PublicationAddToList extends PureComponent<PublicationAddToListProps> {
  constructor(props) {
    super(props);

    this.debounced = debounce(() => {
      const { handleSubmit } = props;
      handleSubmit(submitSearchForm)();
    }, SEARCH_SUBMIT_TIMEOUT, {
      leading: false,
      trailing: true,
    });
  }

  componentDidMount() {
    const {
      fetchPublication,
      match,
      publication,
    } = this.props;

    if (!publication) {
      fetchPublication(match.params.id);
    }
  }

  static getDerivedStateFromProps(props: PublicationAddToListProps) {
    const {
      fetchPublication,
      match,
      publication,
    } = props;
    const { id } = match.params;

    if (!publication || (publication && publication.id !== id)) {
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
      TextField,
      rows,
      publication,
    } = this.props;
    logger.log('render: PublicationAddToList');

    return (
      <Screen>
        <Header title={t.get('PUBLICATION_DETAIL_ADD_LIST_HEADER')} />
        <Page>
          <TextField
            name={fields.SEARCH}
            type="search"
            label={t.get('HEADER_SEARCH')}
            onChange={this.debounced}
          />
          <AddListForm />
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
