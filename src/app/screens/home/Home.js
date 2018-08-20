/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import t from 'helpers/i18n/Translate';
import logger from 'helpers/logger';
import type { HomeProps } from './HomeTypes';

// eslint-disable-next-line
class Home extends React.Component<HomeProps> {
  componentDidMount() {
    const {
      fetchCards,
    } = this.props;

    if (fetchCards) {
      fetchCards();
    }
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      CardList,
      cards,
    } = this.props;
    logger.log('render: Home', cards);

    return (
      <Screen>
        <Header title={t.get('HOME_TITLE')} />
        <Page>
          <CardList />
        </Page>
      </Screen>
    );
  }
}

export default Home;
