import React, { Component } from 'react';

import NavbarHeader from '../containers/navbarHeader';
import PublicationList from '../containers/publicationList';

import InputSearch from '../components/input/inputSearch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        title: ''
      }
    };

    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  setSearchTitle(e) {
    this.setState({
      search: {
        title: e
      }
    });
  }

  render() {
    return (
      <div>
        <NavbarHeader />
        <InputSearch onSearchChange={this.setSearchTitle} />
        <PublicationList search={this.state.search} />
      </div>
    );
  }
}
export default Home;
