import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_title: ''
    };
  }

  handleSearchChange = (value) => {
    this.setState({ search_title: value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      this.makeSearch();
    }
  }
  makeSearch = () => {
    this.props.makeSearch(this.state.search_title);
  }

  render() {
    return (
      <div className="input-search">
        <div className="custom-search-input">
          <div className="input-group">
            <Input
              onChange={this.handleSearchChange}
              onKeyPress={this.handleKeyPress}
              label={this.props.title}
              value={this.state.search_title}
              name="search_title"
            />
            <span className="input-group-btn">
              <Button icon="search" onClick={this.makeSearch} primary />
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
