/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { withNavigation } from 'react-navigation';
import {
  Share,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Linking,
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
  ActionSheet,
} from 'native-base';
import { production } from 'constants/routes/createUrl';
import logger from 'helpers/logger';

import { setCardType, defaultProps } from './helpers';
import type { CardDetailProps } from './types';

export class CardDetail extends Component<CardDetailProps> {
  static defaultProps = defaultProps;

  setCardType() {
    const { card, isDetailed } = this.props;
    setCardType.bind(this)(card, isDetailed);
  }

  goToDetail = () => {
    const { card, navigation } = this.props;

    if (card && this.getDetailUrl) {
      logger.log('goToDetail');
      const url = this.getDetailUrl();
      navigation.navigate(url, { id: card.id });
    }
  };

  shareCard = () => {
    const { card } = this.props;
    Share.share({
      url: production()(this.getDetailUrl(card.id)),
    });
  };

  goTo = (option) => {
    const { navigation } = this.props;
    if (option.to) {
      navigation.navigate(option.to, { id: option.toId });
    }
  };

  goToAddToList = () => {
    const { card, navigation } = this.props;

    logger.log('goToAddToList');
    const url = this.addToListUrl();
    navigation.navigate(url, { id: card.id });
  };

  goToDownload = async () => {
    const { card } = this.props;
    if (card && card.downloadUrl) {
      const supported = await Linking.canOpenURL(card.downloadUrl);

      if (supported) {
        Linking.openURL(card.downloadUrl);
      } else {
        logger.log(`Can't open the download url: ${card.downloadUrl}`);
      }
    }
  };

  handleRenderMoreClick = () => {
    const options = this.moreOptions.map((option) => (option.label));
    ActionSheet.show(
      {
        options,
        cancelButtonIndex: options.length - 1,
        destructiveButtonIndex: options.length - 1,
      },
      (buttonIndex) => {
        const option = this.moreOptions[buttonIndex];
        this.goTo(option);
      }
    );
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
    const goToDetailDebounce = debounce(this.goToDetail, 800, { leading: true, trailing: false });
    const goToAddToListDebounce = debounce(this.goToAddToList, 800, { leading: true, trailing: false });
    const goToDownloadDebounce = debounce(this.goToDownload, 800, { leading: true, trailing: false });

    logger.log('render: CardDetail');

    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Body>
              <Text>{card.title}</Text>
              <Text note>{card.subHeader}</Text>
            </Body>
            <Right
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              { card && this.moreOptions.length > 1 ? (
                <TouchableOpacity
                  onPress={this.handleRenderMoreClick}
                  style={{ width: 40, flexShrink: 1, alignItems: 'flex-end' }}
                >
                  <Icon name="more" active />
                </TouchableOpacity>
              ) : null }
            </Right>
          </CardItem>
          { this.imageUri ? (
            <TouchableWithoutFeedback
              onPress={goToDetailDebounce}
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
          ) : null }
          { isDetailed ? (
            <CardItem>
              <Body>
                <Text>{card.description}</Text>
              </Body>
            </CardItem>
          ) : null }
          <CardItem>
            <Left>
              { card.isFavorite !== undefined ? (
                <TouchableOpacity
                  style={{ width: 40 }}
                  onPress={() => { this.toggleFavorite(card.id); }}
                >
                  <Icon name="star" active={card.isFavorite} style={{ fontSize: 30 }} />
                </TouchableOpacity>
              ) : null }
              { card.isRead !== undefined ? (
                <TouchableOpacity
                  style={{ width: 40, marginTop: 3 }}
                  onPress={() => { this.toggleRead(card.id); }}
                >
                  <Icon name="book" active={card.isRead} style={{ fontSize: 30 }} />
                </TouchableOpacity>
              ) : null }
              { this.addToListUrl ? (
                <TouchableOpacity
                  style={{ width: 40, marginTop: 3 }}
                  onPress={goToAddToListDebounce}
                >
                  <Icon name="add" style={{ fontSize: 30 }} />
                </TouchableOpacity>
              ) : null }
            </Left>
            <Right
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              { card.downloadUrl ? (
                <TouchableOpacity
                  style={{ width: 40 }}
                  onPress={goToDownloadDebounce}
                >
                  <Icon name="download" color="#000" style={{ fontSize: 30 }} />
                </TouchableOpacity>
              ) : null }
              { this.getDetailUrl ? (
                <TouchableOpacity
                  style={{ width: 40, flexShrink: 1, alignItems: 'flex-end' }}
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

export default withNavigation(CardDetail);
