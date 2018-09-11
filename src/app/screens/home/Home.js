/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import logger from 'helpers/logger';
import type { HomeProps } from './HomeTypes';

// eslint-disable-next-line
class Home extends React.Component<HomeProps> {
  componentDidMount() {
    const {
      fetchPublications,
      fetchLists,
      cards,
      rows,
    } = this.props;

    if (!cards) {
      fetchPublications();
    }

    if (!rows) {
      fetchLists();
    }
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      CardList,
    } = this.props;
    logger.log('render: Home');

    return (
      <Screen>
        <Header />
        <Page>
          <CardList />
        </Page>
      </Screen>
    );
  }
}

export default Home;
