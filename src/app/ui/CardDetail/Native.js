/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import {
  Share,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Image } from 'ui/native';
import {
  Card,
  CardItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import { production } from 'constants/routes/createUrl';
import logger from 'helpers/logger';

import { setCardType, defaultProps } from './helpers';
import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardDetailProps } from './types';

export class CardDetail extends Component<CardDetailProps> {
  static defaultProps = defaultProps;

  setCardType() {
    const { card } = this.props;
    setCardType.bind(this)(card);
  }

  goToDetail = () => {
    const { isDetailed, card, history } = this.props;

    if (!isDetailed && card && this.getDetailUrl) {
      logger.log('goToDetail');
      const url = this.getDetailUrl(card.id);
      history.push(url);
    }
  };

  shareCard = () => {
    const { card } = this.props;
    Share.share({
      url: production()(this.getDetailUrl(card.id)),
    });
  };

  goToAddToList = () => {
    const { card, history } = this.props;

    logger.log('goToAddToList');
    const url = this.addToListUrl(card.id);
    history.push(url);
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
    const { card, isDetailed } = this.props;

    if (!card) {
      return null;
    }
    this.setCardType();
    logger.log('render: CardDetail');

    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Body>
              <Text>{card.title}</Text>
              <Text note>{card.subHeader}</Text>
            </Body>
          </CardItem>
          <TouchableWithoutFeedback
            onPress={this.goToDetail}
          >
            <CardItem
              cardBody
            >
              <Image
                source={{ uri: this.imageUri }}
                style={{ height: 200, flex: 1 }}
              />
            </CardItem>
          </TouchableWithoutFeedback>
          { isDetailed ? (
            <CardItem>
              <Body>
                <Text>{card.description}</Text>
              </Body>
            </CardItem>
          ) : null }
          <CardItem>
            <Left>
              <TouchableOpacity
                style={{ width: 40 }}
                onPress={() => { this.toggleFavorite(card.id); }}
              >
                <Icon name="star" active={card.isFavorite} style={{ fontSize: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: 40, marginTop: 3 }}
                onPress={() => { this.toggleRead(card.id); }}
              >
                <Icon name="book" active={card.isRead} style={{ fontSize: 30 }} />
              </TouchableOpacity>
              { this.addToListUrl ? (
                <TouchableOpacity
                  style={{ width: 40, marginTop: 3 }}
                  onPress={this.goToAddToList}
                >
                  <Icon name="add" style={{ fontSize: 30 }} />
                </TouchableOpacity>
              ) : null }
            </Left>
            <Right>
              { this.getDetailUrl ? (
                <TouchableOpacity
                  style={{ width: 40, flex: 1, alignItems: 'flex-end' }}
                  onPress={this.shareCard}
                >
                  <Icon name="share" color="#000" style={{ fontSize: 30 }} />
                </TouchableOpacity>
              ) : null }
            </Right>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardDetail));
