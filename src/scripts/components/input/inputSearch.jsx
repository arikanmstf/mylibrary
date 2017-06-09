import React, { Component } from 'react';
import InputText from './inputText';

class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(value) {
    if (this.props.onSearchChange) {
      this.props.onSearchChange(value);
    }
  }

  defaultOnChange() {
    return true;
  }

  render() {
    return (
      <div className="input-search">
        <InputText
          onChange={this.handleSearchChange}
          className="navbar-header-search"
          placeholder="Type to search a book..."
        />
      </div>
    );
  }
}

InputSearch.propTypes = {
  onSearchChange: PropTypes.Object,
};

InputSearch.defaultProps = {
  onSearchChange: InputSearch.defaultOnChange,
};

export default InputSearch;
