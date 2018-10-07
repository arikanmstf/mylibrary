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

class WriterDetail extends Component<WriterDetailProps> {
  componentDidMount() {
    const {
      fetchWriter,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchWriter(id);
    }
  }

  componentDidUpdate() {
    const {
      fetchWriter,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchWriter(id);
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

export default WriterDetail;
