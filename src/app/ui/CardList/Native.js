/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Image } from 'ui/native';
import logger from 'helpers/logger';
import getConfig from 'config/get';
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import { mapStateToProps, mapDispatchToProps } from './actions';

import type { CardListProps, RenderCardListItem } from './types';

const { staticFilesURL } = getConfig();
logger.log(`staticFilesURL set to ${staticFilesURL}`);

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 400;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

class CardList extends React.Component<CardListProps> {
  onScroll = ({ nativeEvent }) => {
    const {
      fetchCards,
    } = this.props;

    if (isCloseToBottom(nativeEvent)) {
      if (fetchCards) {
        fetchCards();
        logger.log('fetchCards');
      }
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

  renderCardList = (item: RenderCardListItem) => {
    const card = item ? item.item : null;
    return card && (
      <Card key={card.id}>
        <CardItem>
          <Body>
            <Text>{card.title}</Text>
            <Text note>{card.description}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={
              { uri: `${staticFilesURL}/img/cover/${card.id}.jpg` }
            }
            style={
              { height: 200, flex: 1 }
            }
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button
              transparent
              onPress={() => { this.toggleFavorite(card.id, item.index); }}
            >
              <Icon name="star" active={card.isFavorite} style={{ fontSize: 30 }} />
            </Button>
            <Button
              transparent
              onPress={() => { this.toggleRead(card.id, item.index); }}
            >
              <Icon name="book" active={card.isRead} style={{ fontSize: 30 }} />
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  };

  render() {
    const { cards } = this.props;
    const onScrollDebounce = debounce(this.onScroll, 500, {
      leading: true,
    });
    logger.log('render: CardList');

    return (
      <FlatList
        data={cards}
        renderItem={this.renderCardList}
        onScrollEndDrag={({ nativeEvent }) => { onScrollDebounce({ nativeEvent }); }}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
