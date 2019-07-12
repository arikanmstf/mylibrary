/**
 * Screen Template By => create-module script
 * @version 1.0.2
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import { CARD_TYPES } from 'modules/card/constants';
import type { BookDetailProps } from './BookDetailTypes';

class BookDetail extends PureComponent<BookDetailProps> {
  componentDidMount() {
    const {
      fetchBook,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchBook(id);
    }
  }

  componentDidUpdate() {
    const {
      fetchBook,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchBook(id);
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
            || card.type !== CARD_TYPES.BOOK
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
