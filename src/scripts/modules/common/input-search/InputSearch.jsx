import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';

class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_title: ''
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSearchChange = (value) => {
    this.setState({ search_title: value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.makeSearch();
    }
  }
  makeSearch() {
    this.props.makeSearch(this.state.search_title);
  }

  render() {
    return (
      <div className="input-search">
        <div className="custom-search-input">
          <div className="input-group col-md-12">
            <Input
              onChange={(event) => this.handleSearchChange(event)}
              onKeyPress={this.handleKeyPress}
              label={this.props.title}
              value={this.state.search_title}
              name="search_title"
            />
            <span className="input-group-btn">
              <button className="btn btn-lg" type="button" onClick={() => this.makeSearch()}>
                <i className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

InputSearch.propTypes = {
  makeSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  title: PropTypes.string
};
InputSearch.defaultProps = {
  title: 'Search',
  onChange: null
};

export default InputSearch;
