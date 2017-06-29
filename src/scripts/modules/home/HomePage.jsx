import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import InputSearch from 'common/input/InputSearch';
import PublicationList from '../publication-list/PublicationListPage';

class HomePage extends Component {
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
HomePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default HomePage;
