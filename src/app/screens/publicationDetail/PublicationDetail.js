/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import { CARD_TYPES } from 'modules/card/constants';

import defaultStyle from './style';
import type { PublicationDetailProps } from './PublicationDetailTypes';

class PublicationDetail extends PureComponent<PublicationDetailProps> {
  componentDidMount() {
    const {
      fetchPublication,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchPublication(id);
    }
  }

  componentDidUpdate() {
    const {
      fetchPublication,
      match: { params: { id } },
    } = this.props;

    if (this.shouldFetch()) {
      fetchPublication(id);
    }
  }

  shouldFetch() {
    const {
      card,
      navigation,
      match: { params: { id } },
    } = this.props;

    return (
      (
        !card
        || (
          card
          && (
            card.id !== id
            || card.type !== CARD_TYPES.PUBLICATION
          )
        )
      )
      && (navigation ? navigation.isFocused() : true)
    );
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      CardDetail,
      card,
      toggleRead,
      toggleFavorite,
      isEditMode,
    } = this.props;
    logger.log('render: PublicationDetail');

    if (!card) {
      return null;
    }

    return (
      <Screen>
        <Header />
        <Page style={defaultStyle}>
          <CardDetail
            card={card}
            toggleFavorite={toggleFavorite}
            toggleRead={toggleRead}
            isDetailed
            isEditMode={isEditMode}
          />
        </Page>
      </Screen>
    );
  }
}

export default PublicationDetail;
