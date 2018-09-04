/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import debounce from 'lodash.debounce';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import {
  FlatList,
  Share,
  RefreshControl,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
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
import { publicationDetailUrl } from 'constants/routes/createUrl';

import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardListProps, RenderCardListItem } from './types';

const { staticFilesURL, productionURL } = getConfig();
logger.log(`staticFilesURL set to ${staticFilesURL}`);

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 600;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

export class CardList extends React.Component<CardListProps> {
  static shareCard(card: CardItem) {
    Share.share({
      url: `${productionURL}/publications/${card.id}`,
    });
  }

  handleScroll = ({ nativeEvent }) => {
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

  handleRefresh = () => {
    const {
      fetchCards,
      isLoaderVisible,
      search,
    } = this.props;

    if (fetchCards && !isLoaderVisible) {
      fetchCards({ search });
      logger.log('fetchCards');
    }
  };

  handleImageClick = (id: number) => {
    const {
      history,
    } = this.props;

    logger.log('handleImageClick', history);

    if (history) {
      history.push(publicationDetailUrl(id));
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
        <TouchableWithoutFeedback
          onPress={() => { this.handleImageClick(card.id); }}
        >
          <CardItem
            cardBody
          >
            <Image
              source={{ uri: `${staticFilesURL}/img/cover/${card.id}.jpg` }}
              style={{ height: 200, flex: 1 }}
            />
          </CardItem>
        </TouchableWithoutFeedback>
        <CardItem>
          <Left>
            <TouchableOpacity
              style={{ width: 40 }}
              onPress={() => { this.toggleFavorite(card.id, item.index); }}
            >
              <Icon name="star" active={card.isFavorite} style={{ fontSize: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 40, marginTop: 3 }}
              onPress={() => { this.toggleRead(card.id, item.index); }}
            >
              <Icon name="book" active={card.isRead} style={{ fontSize: 30 }} />
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity
              style={{ width: 40, flex: 1, alignItems: 'flex-end' }}
              onPress={() => { CardList.shareCard(card); }}
            >
              <Icon name="share" color="#000" style={{ fontSize: 30 }} />
            </TouchableOpacity>
          </Right>
        </CardItem>
      </Card>
    );
  };

  render() {
    const { cards } = this.props;
    const handleScrollDebounce = ({ nativeEvent }) => {
      debounce(this.handleScroll, 800, {
        leading: true,
      })({ nativeEvent });
    };

    logger.log('render: CardList');

    return (
      <FlatList
        data={cards}
        renderItem={this.renderCardList}
        onScrollEndDrag={handleScrollDebounce}
        refreshControl={<RefreshControl refreshing={false} onRefresh={this.handleRefresh} />}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardList));
