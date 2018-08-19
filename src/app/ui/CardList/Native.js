/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
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

import type { CardListProps, RenderCardListItem } from './types';

const { staticFilesURL } = getConfig();
logger.log(`staticFilesURL set to ${staticFilesURL}`);

class CardList extends React.Component<CardListProps> {
  static renderCardList(item: RenderCardListItem) {
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
            <Button transparent>
              <Icon name="star" style={{ fontSize: 30 }} />
            </Button>
            <Button transparent>
              <Icon name="add" style={{ fontSize: 38 }} />
            </Button>
            <Button transparent>
              <Icon active name="checkmark" style={{ fontSize: 42 }} />
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }

  render() {
    const { cards } = this.props;
    logger.log('render: CardList');

    return (
      <FlatList
        data={cards}
        renderItem={CardList.renderCardList}
      />
    );
  }
}

export default CardList;
