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
  render() {
    const {
      Screen,
      Header,
      Page,
      Text,
    } = this.props;
    logger.log('render: PublicationDetail');

    return (
      <Screen>
        <Header back title={t.get('HOME_TITLE')} />
        <Page>
          <Text>PublicationDetail screen successfully created.</Text>
        </Page>
      </Screen>
    );
  }
}

export default PublicationDetail;
