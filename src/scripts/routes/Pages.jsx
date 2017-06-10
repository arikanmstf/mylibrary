import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../containers/NavbarHeader';
import PublicationList from '../containers/PublicationList';

import InputSearch from '../components/input/InputSearch';

class Pages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        title: '',
        pageNo: props.match.params.pageNo || 1
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
Pages.propTypes = {
  match: PropTypes.object.isRequired
};

export default Pages;
