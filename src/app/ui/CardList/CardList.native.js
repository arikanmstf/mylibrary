/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import type { SyntheticEvent } from 'react-native';
import debounce from 'lodash.debounce';
import { Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import {
  FlatList,
  RefreshControl,
} from 'react-native';
import logger from 'helpers/logger';
import { isCloseToBottom } from 'helpers/window';
import { CardDetail, CenterLoader, Text } from 'ui/native';
import t from 'helpers/i18n/Translate';

import type { CardItem } from 'modules/card/types';
import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardListProps, RenderCardListItem } from './types';

export class CardList extends PureComponent<CardListProps> {
  handleScroll = ({ nativeEvent }: SyntheticEvent) => {
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
      fetchPublications,
      isLoaderVisible,
      search,
    } = this.props;

    if (fetchPublications && !isLoaderVisible) {
      fetchPublications({ search });
      logger.log('fetchPublications');
    }
  };

  keyExtractor = (item: CardItem) => item.id;

  renderCardList() {
    const { toggleRead, toggleFavorite } = this.props;
    return (item: RenderCardListItem) => {
      const card = item ? item.item : null;
      return card && (
        <CardDetail
          card={card}
          toggleRead={toggleRead}
          toggleFavorite={toggleFavorite}
        />
      );
    };
  }

  renderChips() {
    const { type, updateListType } = this.props;

    if (!type || type === '') {
      return null;
    }

    return (
      <Button
        iconRight
        onPress={() => { if (updateListType) { updateListType(null); } }}
        light
      >
        <Text>{t.get(`HEADER_MENU_${type}`)}</Text>
        <Icon name="close" />
      </Button>
    );
  }

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
        extraData={this.props}
        renderItem={this.renderCardList()}
        onScrollEndDrag={handleScrollDebounce}
        refreshControl={<RefreshControl refreshing={false} onRefresh={this.handleRefresh} />}
        keyExtractor={this.keyExtractor}
        ListFooterComponent={CenterLoader}
        ListHeaderComponent={this.renderChips()}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CardList));