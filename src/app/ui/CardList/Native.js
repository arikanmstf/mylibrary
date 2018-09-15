/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { Map } from 'immutable';

import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import {
  FlatList,
  RefreshControl,
} from 'react-native';
import logger from 'helpers/logger';
import { CardDetail } from 'ui/native';

import { mapStateToProps, mapDispatchToProps } from './actions';
import type { CardListProps, RenderCardListItem } from './types';

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 600;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

export class CardList extends Component<CardListProps> {
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
      fetchPublications,
      isLoaderVisible,
      search,
    } = this.props;

    if (fetchPublications && !isLoaderVisible) {
      fetchPublications({ search });
      logger.log('fetchPublications');
    }
  };

  keyExtractor = (item) => item.id;

  renderCardList = (item: RenderCardListItem) => {
    const card = item ? item.item : null;
    return card && (
      <CardDetail
        card={card}
      />
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
        extraData={Map({ cards })}
        renderItem={this.renderCardList}
        onScrollEndDrag={handleScrollDebounce}
        refreshControl={<RefreshControl refreshing={false} onRefresh={this.handleRefresh} />}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardList));
