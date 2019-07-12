// @flow
import React, { PureComponent } from 'react';

import type { CardDetailPageProps } from '../types';

export class CardDetailPageCreator {
  static create(cardType: string) {
    return class extends PureComponent<CardDetailPageProps> {
      componentDidMount() {
        const {
          fetchData,
          match: { params: { id } },
        } = this.props;

        if (this.shouldFetch()) {
          fetchData(id);
        }
      }

      componentDidUpdate() {
        const {
          fetchData,
          match: { params: { id } },
        } = this.props;

        if (this.shouldFetch()) {
          fetchData(id);
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
                || card.type !== cardType
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
          isEditMode,
          toggleRead,
          toggleFavorite,
        } = this.props;

        return (
          <Screen>
            <Header />
            <Page>
              <CardDetail
                card={card}
                isDetailed
                isEditMode={isEditMode}
                toggleRead={toggleRead}
                toggleFavorite={toggleFavorite}
              />
            </Page>
          </Screen>
        );
      }
    };
  }
}
