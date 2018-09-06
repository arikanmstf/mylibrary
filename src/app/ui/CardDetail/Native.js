/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import {
  Share,
  TouchableWithoutFeedback,
  TouchableOpacity,
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
import { publicationDetailUrl } from 'constants/routes/createUrl';
import getConfig from 'config/get';
import logger from 'helpers/logger';

import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardDetailProps } from './types';

const { staticFilesURL, productionURL } = getConfig();
logger.log(`staticFilesURL set to ${staticFilesURL}`);

export class CardDetail extends React.Component<CardDetailProps> {
  static defaultProps = {
    isDetailed: false,
  };

  shareCard = () => {
    const { card } = this.props;
    Share.share({
      url: `${productionURL}/publications/${card.id}`,
    });
  };

  goToDetail = () => {
    const { isDetailed, card, history } = this.props;
    logger.log('goToDetail', card);

    if (!isDetailed) {
      const url = publicationDetailUrl(card.id);
      history.push(url);
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

  render() {
    const { card, index } = this.props;
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>{card.title}</Text>
            <Text note>{card.description}</Text>
          </Body>
        </CardItem>
        <TouchableWithoutFeedback
          onPress={this.goToDetail}
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
              onPress={() => { this.toggleFavorite(card.id, index); }}
            >
              <Icon name="star" active={card.isFavorite} style={{ fontSize: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 40, marginTop: 3 }}
              onPress={() => { this.toggleRead(card.id, index); }}
            >
              <Icon name="book" active={card.isRead} style={{ fontSize: 30 }} />
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity
              style={{ width: 40, flex: 1, alignItems: 'flex-end' }}
              onPress={this.shareCard}
            >
              <Icon name="share" color="#000" style={{ fontSize: 30 }} />
            </TouchableOpacity>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardDetail));
