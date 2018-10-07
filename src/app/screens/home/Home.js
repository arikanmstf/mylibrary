/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { Component } from 'react';
import logger from 'helpers/logger';
import type { HomeProps } from './HomeTypes';

class Home extends Component<HomeProps> {
  state = {};

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

  componentDidUpdate(prevProps) {
    const {
      fetchPublications,
      listType,
    } = this.props;

    if (listType !== prevProps.listType) {
      fetchPublications();
    }
  }

  static getDerivedStateFromProps(props, state) {
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
        <Page>
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
