/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import getConfig from 'config/get';
import logger from 'helpers/logger';
import { green500 } from 'constants/theme/color';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import StarIcon from '@material-ui/icons/Star';
import BookIcon from '@material-ui/icons/Book';
import IconButton from '@material-ui/core/IconButton';
import t from 'helpers/i18n/Translate';

import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardListProps } from './types';

const { staticFilesURL } = getConfig();
const styleActive = { color: green500 };

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

class CardList extends React.Component<CardListProps> {
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

  toggleFavorite(id: number, index: number) {
    const { toggleFavorite } = this.props;
    if (toggleFavorite) {
      toggleFavorite(id, index);
    }
  }

  toggleRead(id: number, index: number) {
    const { toggleRead } = this.props;
    if (toggleRead) {
      toggleRead(id, index);
    }
  }

  renderCardList() {
    const { cards } = this.props;
    return cards && cards.map((card, index) => (
      <Card key={card.id} style={{ margin: '10px 0' }}>
        <CardHeader
          title={card.title}
          subheader={card.description}
        />
        <CardMedia
          image={`${staticFilesURL}/img/cover/${card.id}.jpg`}
          title={card.title}
          style={{ height: '200px' }}
        />
        <CardActions disableActionSpacing>
          <IconButton
            aria-label={t.get('CARD_ADD_TO_FAVORITES')}
            onClick={() => { this.toggleFavorite(card.id, index); }}
          >
            <StarIcon style={card.isFavorite ? styleActive : null} />
          </IconButton>
          <IconButton
            aria-label={t.get('CARD_ADD_TO_BOOKS_I_READ')}
            onClick={() => { this.toggleRead(card.id, index); }}
          >
            <BookIcon style={card.isRead ? styleActive : null} />
          </IconButton>
        </CardActions>
      </Card>
    ));
  }

  render() {
    logger.log('render: CardList');

    return (
      <GridFour>
        {this.renderCardList()}
      </GridFour>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
