/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Component } from 'react';
import logger from 'helpers/logger';
import { CARD_TYPE_WRITER } from 'modules/card/constants';

import type { WriterDetailProps } from './WriterDetailTypes';

class PublicationDetail extends Component<WriterDetailProps> {
  componentDidMount() {
    const {
      fetchWriter,
    } = this.props;

    if (this.shouldFetch()) {
      fetchWriter(this.getId());
    }
  }

  componentDidUpdate() {
    const {
      fetchWriter,
    } = this.props;

    if (this.shouldFetch()) {
      fetchWriter(this.getId());
    }
  }

  getId() {
    const {
      match,
      navigation,
    } = this.props;
    return match ? match.params.id : navigation.getParam('id');
  }

  shouldFetch() {
    const {
      card,
      navigation,
    } = this.props;

    const id = this.getId();

    return (
      (
        !card
        || (
          card
          && (
            card.id !== +id
            || card.type !== CARD_TYPE_WRITER
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
    logger.log('render: WriterDetail');

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

export default PublicationDetail;
