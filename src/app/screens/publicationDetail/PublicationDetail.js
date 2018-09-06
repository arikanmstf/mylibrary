/**
 * Screen Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import * as React from 'react';
import logger from 'helpers/logger';
import t from 'helpers/i18n/Translate';
import type { PublicationDetailProps } from './PublicationDetailTypes';

// eslint-disable-next-line react/prefer-stateless-function
class PublicationDetail extends React.Component<PublicationDetailProps> {
  componentDidMount() {
    const { fetchCard, match: { params: { id } } } = this.props;
    fetchCard(id);
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
        <Header back title={t.get('HOME_TITLE')} />
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
