/**
 * Screen Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import type { ProfileProps } from './ProfileTypes';

// eslint-disable-next-line react/prefer-stateless-function
class Profile extends PureComponent<ProfileProps> {
  render() {
    const {
      Screen,
      Header,
      Page,
      CardDetail,
      card,
    } = this.props;
    logger.log('render: Profile');

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

export default Profile;
