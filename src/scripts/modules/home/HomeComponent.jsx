import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PublicationList from 'modules/publication-list/PublicationListContainer';

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNo: +props.match.params.pageNo || 1,
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
        <PublicationList pageNo={this.state.pageNo} title={this.state.title} />
      </div>
    );
  }
}
HomeComponent.propTypes = {
  match: PropTypes.object.isRequired
};

export default HomeComponent;
