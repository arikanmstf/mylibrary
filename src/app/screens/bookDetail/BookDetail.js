/**
 * Screen Template By => create-module script
 * @version 1.0.2
 *
 */

// @flow
import React, { Component } from 'react';
import logger from 'helpers/logger';
import { CARD_TYPE_BOOK } from 'modules/card/constants';
import type { BookDetailProps } from './BookDetailTypes';

class BookDetail extends Component<BookDetailProps> {
  componentDidMount() {
    const {
      fetchBook,
      match,
      card,
      navigation,
    } = this.props;

    const id = match ? match.params.id : navigation.getParam('id');

    if (!card || (card && (card.id !== +id || card.type !== CARD_TYPE_BOOK))) {
      fetchBook(id);
    }
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      CardDetail,
      card,
    } = this.props;
    logger.log('render: BookDetail');

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

export default BookDetail;
