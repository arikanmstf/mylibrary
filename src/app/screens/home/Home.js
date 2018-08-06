/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import t from 'helpers/i18n/Translate';

import type { HomeProps } from './HomeTypes';

// eslint-disable-next-line
class Home extends React.Component<HomeProps> {
  render() {
    const {
      Text, Screen, Header,
    } = this.props;

    return (
      <Screen>
        <Header title={t.get('HOME_TITLE')} />
        <Text>Home screen successfully created.</Text>
      </Screen>
    );
  }
}

export default Home;
