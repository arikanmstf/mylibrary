/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import type { HomeProps } from './HomeTypes';

// eslint-disable-next-line
class Home extends React.Component<HomeProps> {
  render() {
    const {
      Text, Screen,
    } = this.props;

    return (
      <Screen>
        <Text>Home screen successfully created.</Text>
      </Screen>
    );
  }
}

export default Home;
