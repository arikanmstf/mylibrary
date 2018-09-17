/**
 * Web Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import BookIcon from '@material-ui/icons/Book';
import AddIcon from '@material-ui/icons/Add';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';
import { green500 } from 'constants/theme/color';
import t from 'helpers/i18n/Translate';
import logger from 'helpers/logger';

import { setCardType, defaultProps } from './helpers';
import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardDetailProps } from './types';

const styleActive = { color: green500 };

export class CardDetail extends Component<CardDetailProps> {
  static defaultProps = defaultProps;

  setCardType() {
    const { card } = this.props;
    setCardType.bind(this)(card);
  }

  goToDetail = () => {
    const { isDetailed, card, history } = this.props;

    if (!isDetailed && card && this.getDetailUrl) {
      logger.log('goToDetail', card);
      const url = this.getDetailUrl(card.id);
      history.push(url);
    }
  };

  goToAddToList = () => {
    const { card, history } = this.props;

    logger.log('goToAddToList');
    const url = this.addToListUrl(card.id);
    history.push(url);
  };

  goToDownload = () => {
    const { card } = this.props;
    if (card && card.downloadUrl) {
      window.open(card.downloadUrl);
    }
  };

  toggleFavorite(id: number) {
    const { toggleFavorite } = this.props;
    if (toggleFavorite) {
      toggleFavorite(id);
    }
  }

  toggleRead(id: number) {
    const { toggleRead } = this.props;
    if (toggleRead) {
      toggleRead(id);
    }
  }

  render() {
    const {
      card,
      style,
      isDetailed,
    } = this.props;
    const linkStyle = !isDetailed ? { cursor: 'pointer' } : {};
    this.setCardType();

    if (!card) {
      return null;
    }

    logger.log('render: CardDetail');

    return (
      <Card style={{ maxWidth: '768px', margin: '0 auto', ...style }}>
        <CardHeader
          title={card.title}
          subheader={card.subHeader}
          onClick={this.goToDetail}
          style={linkStyle}
        />
        <CardMedia
          image={this.imageUri}
          title={card.title}
          onClick={this.goToDetail}
          style={{ height: '200px', ...linkStyle }}
        />
        { isDetailed ? (
          <CardContent>
            <Typography component="p">{card.description}</Typography>
          </CardContent>
        ) : null }
        <CardActions disableActionSpacing>
          <IconButton
            aria-label={t.get('CARD_ADD_TO_FAVORITES')}
            onClick={() => { this.toggleFavorite(card.id); }}
          >
            <StarIcon style={card.isFavorite ? styleActive : null} />
          </IconButton>
          <IconButton
            aria-label={t.get('CARD_ADD_TO_BOOKS_I_READ')}
            onClick={() => { this.toggleRead(card.id); }}
          >
            <BookIcon style={card.isRead ? styleActive : null} />
          </IconButton>
          { this.addToListUrl ? (
            <IconButton
              onClick={this.goToAddToList}
            >
              <AddIcon />
            </IconButton>
          ) : null }
          { card.downloadUrl ? (
            <IconButton
              onClick={this.goToDownload}
              style={{ marginLeft: 'auto' }}
            >
              <DownloadIcon />
            </IconButton>
          ) : null }
        </CardActions>
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardDetail));