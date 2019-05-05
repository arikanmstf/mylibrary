/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { Badge } from 'native-base';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import {
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import logger from 'helpers/logger';
import {
  CardDetail, CenterLoader, Text, Div,
} from 'ui/native';
import t from 'helpers/i18n/Translate';
import { grey300 } from 'constants/theme/color';
import HeaderSearch from 'ui/Header/HeaderSearch';

import type { CardItem } from 'modules/card/types';
import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardListProps, RenderCardListItem } from './types';

export class CardList extends PureComponent<CardListProps> {
  handleLoadMore = () => {
    const {
      addCards,
    } = this.props;

    if (addCards) {
      addCards();
      logger.log('addCards');
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

  renderListHeader() {
    const { type, updateListType } = this.props;

    return (
      <Div>
        <HeaderSearch />
        { type ? (
          <TouchableOpacity
            onPress={() => { if (updateListType) { updateListType(null); } }}
          >
            <Badge style={{ backgroundColor: grey300 }}>
              <Text>{t.get(`HEADER_MENU_${type}`)}</Text>
            </Badge>
          </TouchableOpacity>
        ) : null }
      </Div>
    );
  }

  render() {
    const { cards } = this.props;

    logger.log('render: CardList');

    return (
      <FlatList
        data={cards}
        extraData={this.props}
        renderItem={this.renderCardList()}
        refreshControl={<RefreshControl refreshing={false} onRefresh={this.handleRefresh} />}
        keyExtractor={this.keyExtractor}
        ListFooterComponent={CenterLoader}
        ListHeaderComponent={this.renderListHeader()}
        onEndReachedThreshold={0.5}
        onEndReached={this.handleLoadMore}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CardList));
