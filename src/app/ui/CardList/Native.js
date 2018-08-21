/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { FlatList, Share, RefreshControl } from 'react-native';
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
  Right,
} from 'native-base';
import { mapStateToProps, mapDispatchToProps } from './actions';

import type { CardListProps, RenderCardListItem } from './types';

const { staticFilesURL, productionURL } = getConfig();
logger.log(`staticFilesURL set to ${staticFilesURL}`);

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 600;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

class CardList extends React.Component<CardListProps> {
  static shareCard(card: CardItem) {
    Share.share({
      url: `${productionURL}/publications/${card.id}`,
    });
  }

  onScroll = ({ nativeEvent }) => {
    const {
      addCards,
    } = this.props;

    if (isCloseToBottom(nativeEvent)) {
      if (addCards) {
        addCards();
        logger.log('addCards');
      }
    }
  };

  onRefresh = () => {
    const {
      fetchCards,
      isLoaderVisible,
    } = this.props;

    if (fetchCards && !isLoaderVisible) {
      fetchCards();
      logger.log('fetchCards');
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
          <Right>
            <Button
              transparent
              onPress={() => { CardList.shareCard(card); }}
            >
              <Icon name="share" style={{ fontSize: 30 }} />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  };

  render() {
    const { cards } = this.props;
    const onScrollDebounce = debounce(this.onScroll, 800, {
      leading: true,
    });
    logger.log('render: CardList');

    return (
      <FlatList
        data={cards}
        renderItem={this.renderCardList}
        onScrollEndDrag={({ nativeEvent }) => { onScrollDebounce({ nativeEvent }); }}
        refreshControl={<RefreshControl refreshing={false} onRefresh={this.onRefresh} />}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
