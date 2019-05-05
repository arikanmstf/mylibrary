/**
 * Web Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'ui';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';

import { lime100 } from 'constants/theme/color';
import {
  ICON_BOOK,
  ICON_FAVORITE,
  ICON_PLUS,
  ICON_DOWNLOAD,
  ICON_MORE,
} from 'constants/theme/icons';
import { publicationDetailUrl, bookDetailUrl } from 'constants/routes/createUrl';
import { CARD_TYPE_PUBLICATION, SUB_ITEM_TYPE_BOOK, SUB_ITEM_TYPE_PUBLICATION } from 'modules/card/constants';
import t from 'helpers/i18n/Translate';
import logger from 'helpers/logger';
import type { Node } from 'react';
import type { Item } from 'helpers/api/types';

import { setCardType, defaultProps } from './helpers';
import type { CardDetailProps, CardDetailState, Option } from './types';

export class CardDetail extends PureComponent<CardDetailProps, CardDetailState> {
  static defaultProps = defaultProps;

  state = {
    anchorElRenderMore: null,
    openListId: null,
  };

  getDetailUrl: Function;

  setCardType() {
    const { card, isDetailed } = this.props;
    setCardType.bind(this)(card, isDetailed);
  }

  goTo = (url?: ?string) => {
    const { history } = this.props;
    if (url && history) {
      history.push(url);
    }
  };

  goToDetail = () => {
    const { card, history } = this.props;

    if (card && this.getDetailUrl && history) {
      logger.log('goToDetail', card);
      const url = this.getDetailUrl(card.id);
      history.push(url);
    }
  };

  goToAddToList = () => {
    const { card, history } = this.props;

    logger.log('goToAddToList');
    const url = this.addToListUrl(card.id);

    if (history) {
      history.push(url);
    }
  };

  goToDownload = () => {
    const { card } = this.props;
    if (card && card.downloadUrl) {
      window.open(card.downloadUrl);
    }
  };

  goToPublication = (id: number) => {
    const { history } = this.props;

    logger.log('goToPublication');
    const url = publicationDetailUrl(id);

    if (history) {
      history.push(url);
    }
  };

  goToBook = (id: number) => {
    const { history } = this.props;

    logger.log('goToBook');
    const url = bookDetailUrl(id);

    if (history) {
      history.push(url);
    }
  };

  handleRenderMoreClick = (event: { currentTarget: HTMLElement }) => {
    this.setState({ anchorElRenderMore: event.currentTarget });
  };

  handleRenderMoreClose = () => {
    this.setState({ anchorElRenderMore: null });
  };

  handleListSubItemClick = (subItem: Item) => {
    let goTo;

    switch (subItem.type) {
      case SUB_ITEM_TYPE_BOOK: goTo = this.goToBook; break;
      case SUB_ITEM_TYPE_PUBLICATION: goTo = this.goToPublication; break;
      default: goTo = () => {};
    }

    goTo(subItem.id);
  };

  handleListItemClick(id: number) {
    const { openListId } = this.state;

    if (id === openListId) {
      this.setState({ openListId: null });
    } else {
      this.setState({ openListId: id });
    }
  }

  isListOpen(id: number) {
    const { openListId } = this.state;
    return openListId === id;
  }

  moreOptions: Array<Option>;

  imageUri: string;

  addToListUrl: Function;

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

  renderData() {
    const { isDetailed, card } = this.props;

    return isDetailed && card.additionalData && card.additionalData.map((data) => (
      <div key={data.key}>
        <ListItem>
          <ListItemText primary={`${t.get(`PUBLICATION_DETAIL_${data.key}`)}: ${data.value}`} />
        </ListItem>
      </div>
    ));
  }

  renderList() {
    const { isDetailed, card } = this.props;
    const activeStyle = { backgroundColor: lime100 };

    return isDetailed && card.lists && card.lists.map((list) => (
      <div key={list.id}>
        <ListItem
          onClick={() => { this.handleListItemClick(list.id); }}
          button
          divider
        >
          <ListItemText primary={list.name} />
          <ListItemSecondaryAction style={{ paddingRight: 20 }}>
            #{list.orderNo}
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={this.isListOpen(list.id)} unmountOnExit>
          <List component="div" disablePadding>
            { list.subItems.map((subItem) => (
              <ListItem
                dense
                button
                key={subItem.id}
                style={(subItem.id === card.id && card.type === CARD_TYPE_PUBLICATION) ? activeStyle : undefined}
                onClick={() => { this.handleListSubItemClick(subItem); }}
              >
                <ListItemText inset primary={subItem.name} />
                <ListItemSecondaryAction style={{ paddingRight: 20 }}>
                  #{subItem.orderNo}
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    ));
  }

  renderMoreOptions(): Node {
    return this.moreOptions.map((option) => (
      <MenuItem
        key={option.label}
        onClick={() => {
          this.handleRenderMoreClose();
          this.goTo(option.to);
        }}
      >
        {option.label}
      </MenuItem>
    ));
  }

  renderMore() {
    const { anchorElRenderMore } = this.state;
    if (this.moreOptions.length < 2) {
      return null;
    }

    return (
      <div>
        <IconButton
          onClick={this.handleRenderMoreClick}
        >
          <Icon name={ICON_MORE} />
        </IconButton>
        <Menu
          id="header-more-menu"
          anchorEl={anchorElRenderMore}
          open={Boolean(anchorElRenderMore)}
          onClose={this.handleRenderMoreClose}
        >
          {this.renderMoreOptions()}
        </Menu>
      </div>
    );
  }

  render() {
    const {
      card,
      style,
      isDetailed,
    } = this.props;
    this.setCardType();
    const linkStyle = this.getDetailUrl ? { cursor: 'pointer' } : {};

    if (!card) {
      return null;
    }

    logger.log('render: CardDetail');

    return (
      <Card style={{ maxWidth: '768px', margin: '0 auto', ...style }}>
        <CardHeader
          title={card.title}
          subheader={card.subHeader}
          action={this.renderMore()}
        />
        { this.imageUri ? (
          <CardMedia
            image={this.imageUri}
            title={card.title}
            onClick={this.goToDetail}
            style={{ height: '200px', ...linkStyle }}
          />
        ) : null }
        { isDetailed ? (
          <CardContent>
            <Typography component="p">{card.description}</Typography>
          </CardContent>
        ) : null }
        <CardActions disableActionSpacing>
          { card.isFavorite !== undefined ? (
            <IconButton
              aria-label={t.get('CARD_ADD_TO_FAVORITES')}
              onClick={() => { this.toggleFavorite(card.id); }}
            >
              <Icon name={ICON_FAVORITE} active={card.isFavorite} />
            </IconButton>
          ) : null }
          { card.isRead !== undefined ? (
            <IconButton
              aria-label={t.get('CARD_ADD_TO_BOOKS_I_READ')}
              onClick={() => { this.toggleRead(card.id); }}
            >
              <Icon name={ICON_BOOK} active={card.isRead} />
            </IconButton>
          ) : null }
          { this.addToListUrl ? (
            <IconButton
              onClick={this.goToAddToList}
            >
              <Icon name={ICON_PLUS} />
            </IconButton>
          ) : null }
          { card.downloadUrl ? (
            <IconButton
              onClick={this.goToDownload}
              style={{ marginLeft: 'auto' }}
            >
              <Icon name={ICON_DOWNLOAD} />
            </IconButton>
          ) : null }
        </CardActions>
        <List>
          {this.renderData()}
        </List>
        <List>
          {this.renderList()}
        </List>
      </Card>
    );
  }
}

export default withRouter(CardDetail);
