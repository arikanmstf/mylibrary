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
  willFocus = this.props.navigation.addListener( // eslint-disable-line react/destructuring-assignment
    'willFocus',
    () => {
      this.forceUpdate();
    }
  );

  componentDidMount() {
    const {
      fetchBook,
    } = this.props;

    if (this.shouldFetch()) {
      fetchBook(this.getId());
    }
  }

  componentDidUpdate() {
    const {
      fetchBook,
    } = this.props;

    if (this.shouldFetch()) {
      fetchBook(this.getId());
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
            || card.type !== CARD_TYPE_BOOK
          )
        )
      )
      && navigation.isFocused()
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
