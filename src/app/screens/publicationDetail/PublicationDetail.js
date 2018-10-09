/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import { CARD_TYPE_PUBLICATION } from 'modules/card/constants';

import type { PublicationDetailProps } from './PublicationDetailTypes';

class PublicationDetail extends PureComponent<PublicationDetailProps> {
  componentDidMount() {
    const {
      fetchPublication,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchPublication(id);
    }
  }

  componentDidUpdate() {
    const {
      fetchPublication,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchPublication(id);
    }
  }

  shouldFetch() {
    const {
      card,
      navigation,
      match: { params: { id } },
    } = this.props;

    return (
      (
        !card
        || (
          card
          && (
            card.id !== +id
            || card.type !== CARD_TYPE_PUBLICATION
          )
        )
      )
      && (navigation ? navigation.isFocused() : true)
    );
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      CardDetail,
      card,
      toggleRead,
      toggleFavorite,
    } = this.props;
    logger.log('render: PublicationDetail');

    return (
      <Screen>
        <Header />
        <Page>
          <CardDetail
            card={card}
            toggleFavorite={toggleFavorite}
            toggleRead={toggleRead}
            isDetailed
          />
        </Page>
      </Screen>
    );
  }
}

export default PublicationDetail;
