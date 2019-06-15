/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import { withNavigation } from 'react-navigation';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';

import {
  Share,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { Image, Icon, Div } from 'ui/native';
import {
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Right,
  ActionSheet,
  List,
  ListItem,
} from 'native-base';
import { production, publicationDetailUrl, bookDetailUrl } from 'constants/routes/createUrl';
import logger from 'helpers/logger';
import { CARD_TYPE_PUBLICATION, SUB_ITEM_TYPE_BOOK, SUB_ITEM_TYPE_PUBLICATION } from 'modules/card/constants';
import t from 'helpers/i18n/Translate';
import {
  ICON_BOOK,
  ICON_SHARE,
  ICON_FAVORITE,
  ICON_PLUS,
  ICON_DOWNLOAD,
  ICON_MORE,
  WIDTH_OF_CARD_ICON,
  cardMoreIconDefaultStyle,
} from 'constants/theme/icons';
import ImageScrollHeader from './ImageScrollHeader';

import { setCardType, defaultProps } from './helpers';
import type { CardDetailProps, Option } from './types';

export class CardDetail extends PureComponent<CardDetailProps> {
  static defaultProps = defaultProps;

  state = {
    openListId: null,
    isHeaderImageHasError: false,
  };

  getDetailUrl: Function;

  getDetailUrlWithId: Function;

  setCardType() {
    const { card, isDetailed } = this.props;
    setCardType.bind(this)(card, isDetailed);
  }

  goToDetail = () => {
    const { card, navigation } = this.props;

    if (card && this.getDetailUrl && navigation) {
      logger.log('goToDetail');
      const url = this.getDetailUrl();
      navigation.navigate(url, { id: card.id });
    }
  };

  shareCard = () => {
    if (!this.getDetailUrlWithId) {
      throw new Error('getDetailUrlWithId not found.');
    }

    const { card } = this.props;
    Share.share({
      url: production()(this.getDetailUrlWithId(card.id)),
    });
  };

  goTo = (option: Option) => {
    const { navigation } = this.props;
    if (option.to && navigation) {
      navigation.navigate(option.to, { id: option.toId });
    }
  };

  goToAddToList = () => {
    const { card, navigation } = this.props;

    logger.log('goToAddToList');
    const url = this.addToListUrl();

    if (navigation) {
      navigation.navigate(url, { id: card.id });
    }
  };

  goToDownload = async () => {
    const { card } = this.props;
    if (card && card.downloadUrl) {
      const supported = await Linking.canOpenURL(card.downloadUrl);

      if (supported) {
        Linking.openURL(card.downloadUrl);
      } else {
        logger.log('Cant open the download url', card.downloadUrl);
      }
    }
  };

  goToPublication = (id: number) => {
    const { navigation } = this.props;

    logger.log('goToPublication');
    const url = publicationDetailUrl(id);

    if (navigation) {
      navigation.navigate(url, { id });
    }
  };

  goToBook = (id: number) => {
    const { navigation } = this.props;

    logger.log('goToBook');
    const url = bookDetailUrl(id);

    if (navigation) {
      navigation.navigate(url, { id });
    }
  };

  handleRenderMoreClick = () => {
    const options = card.options.map((option) => (option.label));
    ActionSheet.show(
      {
        options,
        cancelButtonIndex: options.length - 1,
        destructiveButtonIndex: options.length - 1,
      },
      (buttonIndex) => {
        const option = card.options[buttonIndex];
        this.goTo(option);
      }
    );
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

  handleHeaderImageError = () => {
    this.setState({
      isHeaderImageHasError: true,
    });
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
      <Div key={data.key}>
        <ListItem>
          <Left>
            <Text>{`${t.get(`PUBLICATION_DETAIL_${data.key}`)}: ${data.value}`}</Text>
          </Left>
          <Right>
            <Text />
          </Right>
        </ListItem>
      </Div>
    ));
  }

  renderList() {
    const { isDetailed, card } = this.props;

    return isDetailed && card.lists && card.lists.map((list) => (
      <Div>
        <ListItem
          key={list.id}
          itemDivider
          onPress={() => { this.handleListItemClick(list.id); }}
        >
          <Left>
            <Text>{list.name}</Text>
          </Left>
          <Right>
            <Text>#{list.orderNo}</Text>
          </Right>
        </ListItem>
        { this.isListOpen(list.id) ? list.subItems.map((subItem) => (
          <ListItem
            key={subItem.id}
            selected={subItem.id === card.id && card.type === CARD_TYPE_PUBLICATION}
            onPress={() => { this.handleListSubItemClick(subItem); }}
          >
            <Left>
              <Text>{subItem.name}</Text>
            </Left>
            <Right>
              <Text style={{ paddingRight: 20 }}>#{subItem.orderNo}</Text>
            </Right>
          </ListItem>
        )) : null }
      </Div>
    ));
  }

  render() {
    const { card, isDetailed } = this.props;
    const { isHeaderImageHasError } = this.state;

    if (!card) {
      return null;
    }
    this.setCardType();
    const goToDetailDebounce = debounce(this.goToDetail, 800, { leading: true, trailing: false });
    const goToAddToListDebounce = debounce(this.goToAddToList, 800, { leading: true, trailing: false });
    const goToDownloadDebounce = debounce(this.goToDownload, 800, { leading: true, trailing: false });
    const ContainerView = isDetailed && !isHeaderImageHasError && card.image ? HeaderImageScrollView : ScrollView;
    const containerViewProps = isDetailed && !isHeaderImageHasError && card.image
      ? {
        maxHeight: isDetailed ? 400 : undefined,
        minHeight: isDetailed ? 60 : undefined,
      } : null;

    logger.log('render: CardDetail');

    return (
      <ContainerView
        {...containerViewProps}
        renderHeader={
          () => (
            <ImageScrollHeader
              uri={card.image}
              maxHeight={400}
              onError={this.handleHeaderImageError}
            />
          )
        }
      >
        <Card>
          <CardItem>
            <Body>
              <Text>{card.title}</Text>
              <Text note>{card.subCard.title}</Text>
            </Body>
            <Right
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              { card && card.options.length > 1 ? (
                <TouchableOpacity
                  onPress={this.handleRenderMoreClick}
                  style={{ width: WIDTH_OF_CARD_ICON, flexShrink: 1, alignItems: 'flex-end' }}
                >
                  <Icon name={ICON_MORE} style={cardMoreIconDefaultStyle} />
                </TouchableOpacity>
              ) : null }
            </Right>
          </CardItem>
          { card.image && !isDetailed ? (
            <TouchableWithoutFeedback
              onPress={goToDetailDebounce}
            >
              <CardItem
                cardBody
              >
                <Image
                  source={{ uri: card.image }}
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
                  style={{ width: WIDTH_OF_CARD_ICON }}
                  onPress={() => { this.toggleFavorite(card.id); }}
                >
                  <Icon name={ICON_FAVORITE} active={card.isFavorite} />
                </TouchableOpacity>
              ) : null }
              { card.isRead !== undefined ? (
                <TouchableOpacity
                  style={{ width: WIDTH_OF_CARD_ICON, marginTop: 4 }}
                  onPress={() => { this.toggleRead(card.id); }}
                >
                  <Icon name={ICON_BOOK} active={card.isRead} />
                </TouchableOpacity>
              ) : null }
              { this.addToListUrl ? (
                <TouchableOpacity
                  style={{ width: WIDTH_OF_CARD_ICON, marginTop: 4 }}
                  onPress={goToAddToListDebounce}
                >
                  <Icon name={ICON_PLUS} />
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
                  style={{ width: WIDTH_OF_CARD_ICON }}
                  onPress={goToDownloadDebounce}
                >
                  <Icon name={ICON_DOWNLOAD} />
                </TouchableOpacity>
              ) : null }
              { this.getDetailUrl ? (
                <TouchableOpacity
                  style={{ width: WIDTH_OF_CARD_ICON, flexShrink: 1, alignItems: 'flex-end' }}
                  onPress={this.shareCard}
                >
                  <Icon name={ICON_SHARE} />
                </TouchableOpacity>
              ) : null }
            </Right>
          </CardItem>
          <List>
            {this.renderData()}
          </List>
          <List>
            {this.renderList()}
          </List>
        </Card>
      </ContainerView>
    );
  }
}

export default withNavigation(CardDetail);
