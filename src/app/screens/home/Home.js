/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { Component } from 'react';
import logger from 'helpers/logger';
import type { HomeProps, HomeState } from './HomeTypes';

class Home extends Component<HomeProps, HomeState> {
  state = {};

  componentDidMount() {
    const {
      fetchPublications,
      cards,
    } = this.props;

    if (!cards) {
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

  static getDerivedStateFromProps(props: HomeProps, state: HomeState) {
    if (props.listType !== state.listType) {
      return {
        listType: props.listType,
      };
    }

    return null;
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
