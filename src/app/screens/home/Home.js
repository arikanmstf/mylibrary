/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import type { HomeProps, HomeState } from './HomeTypes';

class Home extends PureComponent<HomeProps, HomeState> {
  componentDidMount() {
    const {
      fetchPublications,
      cards,
      fetchedPublicationListType,
      listType,
    } = this.props;

    if (!cards || listType !== fetchedPublicationListType) {
      fetchPublications();
    }
  }

  componentDidUpdate(prevProps: HomeProps) {
    const {
      fetchPublications,
      listType,
    } = this.props;

    if (listType !== prevProps.listType) {
      fetchPublications();
    }
  }

  render() {
    const {
      Screen,
      Header,
      Page,
      CardList,
      toggleRead,
      toggleFavorite,
    } = this.props;
    logger.log('render: Home');

    return (
      <Screen>
        <Header />
        <Page id="homePage">
          <CardList
            toggleRead={toggleRead}
            toggleFavorite={toggleFavorite}
          />
        </Page>
      </Screen>
    );
  }
}

export default Home;
