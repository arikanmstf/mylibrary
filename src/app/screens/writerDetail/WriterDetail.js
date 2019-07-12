/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import { CARD_TYPES } from 'modules/card/constants';

import type { WriterDetailProps } from './WriterDetailTypes';

class WriterDetail extends PureComponent<WriterDetailProps> {
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
            card.id !== id
            || card.type !== CARD_TYPES.WRITER
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
