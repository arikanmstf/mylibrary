/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import getConfig from 'config/get';
import logger from 'helpers/logger';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import StarIcon from '@material-ui/icons/Star';
import PlusIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import t from 'helpers/i18n/Translate';

import type { CardListProps, CardItem } from './types';

const { staticFilesURL } = getConfig();

class CardList extends React.Component<CardListProps> {
  static renderCardList(cards: Array<CardItem>) {
    return cards && cards.map((card) => (
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
          <IconButton aria-label={t.get('CARD_ADD_TO_FAVORITES')}>
            <StarIcon />
          </IconButton>
          <IconButton aria-label={t.get('CARD_ADD_TO_BOOKS_I_READ')}>
            <PlusIcon />
          </IconButton>
          <IconButton>
            <CheckIcon />
          </IconButton>
        </CardActions>
      </Card>
    ));
  }

  render() {
    const { cards } = this.props;
    logger.log('render: CardList');

    return (
      <div>
        {CardList.renderCardList(cards)}
      </div>
    );
  }
}

export default CardList;
