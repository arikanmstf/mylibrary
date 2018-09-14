/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Component } from 'react';
import logger from 'helpers/logger';
import type { PublicationDetailProps } from './PublicationDetailTypes';

class PublicationDetail extends Component<PublicationDetailProps> {
  componentDidMount() {
    const { fetchPublication, match: { params: { id } }, card } = this.props;

    if (!card || (card && card.id !== +id)) {
      fetchPublication(id);
    }
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      CardDetail,
      card,
    } = this.props;
    logger.log('render: PublicationDetail');

    return (
      <Screen>
        <Header />
        <Page>
          <CardDetail
            card={card}
            isDetailed
          />
        </Page>
      </Screen>
    );
  }
}

export default PublicationDetail;
