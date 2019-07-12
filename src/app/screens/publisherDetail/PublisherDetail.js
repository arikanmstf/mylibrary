/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import { CARD_TYPES } from 'modules/card/constants';

import type { PublisherDetailProps } from './PublisherDetailTypes';

class PublisherDetail extends PureComponent<PublisherDetailProps> {
  componentDidMount() {
    const {
      fetchPublisher,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchPublisher(id);
    }
  }

  componentDidUpdate() {
    const {
      fetchPublisher,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchPublisher(id);
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
            card.id !== id
            || card.type !== CARD_TYPES.PUBLISHER
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
    } = this.props;
    logger.log('render: PublisherDetail');

    return (
      <Screen>
        <Header />
        <Page>
          <CardDetail
            card={card}
            isDetailed
          />
        </Page>
      </Screen>
    );
  }
}

export default PublisherDetail;
