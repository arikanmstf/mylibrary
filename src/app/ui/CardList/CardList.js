/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import t from 'helpers/i18n/Translate';

import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import logger from 'helpers/logger';
import { isCloseToBottom, isPageNotFilled } from 'helpers/window';
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

export class CardList extends PureComponent<CardListProps> {
  componentDidMount() {
    this.handleScrollDebounce = debounce(this.handleScroll, 800, {
      leading: true,
    });

    window.addEventListener('scroll', this.handleScrollDebounce);
  }

  componentDidUpdate() {
    const { addCards } = this.props;

    if (isPageNotFilled() && addCards) {
      addCards();
      logger.log('addCards');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollDebounce);
  }

  handleScroll = () => {
    const { addCards } = this.props;

    if (isCloseToBottom() && addCards) {
      addCards();
      logger.log('addCards');
    }
  };

  handleScrollDebounce: Function;

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

  renderChips() {
    const { type, updateListType } = this.props;

    if (!type || type === '') {
      return null;
    }

    return (
      <Chip
        label={t.get(`HEADER_MENU_${type}`)}
        onDelete={() => { if (updateListType) { updateListType(null); } }}
      />
    );
  }

  render() {
    logger.log('render: CardList');

    return (
      <div>
        {this.renderChips()}
        <GridFour>
          {this.renderCardList()}
        </GridFour>
        <CenterLoader />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
