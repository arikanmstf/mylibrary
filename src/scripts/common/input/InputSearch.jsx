import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <div className="custom-search-input">
            <div className="input-group col-md-12">
                <input
                  onChange={this.handleSearchChange}
                  type="text"
                  className="form-control input-lg"
                  placeholder="Search"
                />
                <span className="input-group-btn">
                    <button className="btn btn-lg" type="button" onClick={this.makeSearch}>
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
  makeSearch: PropTypes.func,
};

InputSearch.defaultProps = {
  makeSearch: InputSearch.defaultSearch,
};

export default InputSearch;
