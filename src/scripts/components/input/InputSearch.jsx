import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputText from './InputText';

class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
  }

  handleSearchChange(newValue) {
    this.setState({ title: newValue });
  }
  makeSearch() {
    if (this.props.makeSearch) {
      this.props.makeSearch(this.state.title);
    }
  }

  defaultSearch() {

  }

  render() {
    return (
      <div className="input-search">
        <InputText
          onChange={this.handleSearchChange}
          className="navbar-header-search"
          placeholder="Type to search..."
        />
      <button onClick={this.makeSearch} className="btn btn-search col-sm-3 col-md-3 col-xs-3 right">
          <i className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}

InputSearch.propTypes = {
  makeSearch: PropTypes.func,
};

InputSearch.defaultProps = {
  makeSearch: InputSearch.defaultSearch,
};

export default InputSearch;
