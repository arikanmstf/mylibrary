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

export class CardList extends React.Component<CardListProps> {
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

  renderCardList = (item: RenderCardListItem) => {
    const card = item ? item.item : null;
    return card && (
      <CardDetail
        card={card}
        index={item.index}
        key={card.id}
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
        renderItem={this.renderCardList}
        onScrollEndDrag={handleScrollDebounce}
        refreshControl={<RefreshControl refreshing={false} onRefresh={this.handleRefresh} />}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardList));
