import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_title: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSearchChange(event) {
    this.setState({ search_title: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }
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
                <input
                  onChange={this.handleSearchChange}
                  type="text"
                  className="form-control input-lg"
                  onKeyPress={this.handleKeyPress}
                  placeholder={this.props.title}
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
