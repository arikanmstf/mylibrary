/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import logger from 'helpers/logger';
import { CardDetail, CenterLoader } from 'ui';

import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardListProps } from './types';

const GridFour = styled.div`
@media screen and (min-width: 768px) {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

@media screen and (min-width: 1024px) {
  grid-template-columns: repeat(6, 1fr);
}
`;

const isCloseToBottom = () => {
  const windowHeight = window.innerHeight || document.documentElement.offsetHeight;
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  return windowHeight + window.pageYOffset + 600 >= docHeight;
};

export class CardList extends Component<CardListProps> {
  componentDidMount() {
    this.handleScrollDebounce = debounce(this.handleScroll, 800, {
      leading: true,
    });

    window.addEventListener('scroll', this.handleScrollDebounce);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollDebounce);
  }

  handleScroll = () => {
    const {
      addCards,
    } = this.props;

    if (isCloseToBottom()) {
      addCards();
      logger.log('addCards');
    }
  };

  renderCardList() {
    const { cards, toggleRead, toggleFavorite } = this.props;
    return cards && cards.map((card) => (
      <CardDetail
        card={card}
        key={card.id}
        style={{ margin: '10px 0' }}
        toggleRead={toggleRead}
        toggleFavorite={toggleFavorite}
      />
    ));
  }

  render() {
    logger.log('render: CardList');

    return (
      <div>
        <GridFour>
          {this.renderCardList()}
        </GridFour>
        <CenterLoader />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
