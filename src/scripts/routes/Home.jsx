import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../containers/NavbarHeader';
import PublicationList from '../containers/PublicationList';

import InputSearch from '../components/input/InputSearch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNo: parseInt(props.match.params.pageNo, 10) || 1,
      title: ''
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  setSearchTitle(e) {
    this.setState({ title: e });
  }

  render() {
    return (
      <div>
        <NavbarHeader />
        <InputSearch makeSearch={this.setSearchTitle} />
        <PublicationList pageNo={this.state.pageNo} title={this.state.title} />
      </div>
    );
  }
}
Home.propTypes = {
  match: PropTypes.object.isRequired
};

export default Home;
