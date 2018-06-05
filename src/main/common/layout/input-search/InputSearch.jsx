import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';
import { CenteredDiv } from 'common/layout';

const DivSearch = styled.div`
padding: 3px;
border: solid 1px #E4E4E4;
border-radius: 6px;
background-color: #fff;

input {
  border: 0;
  box-shadow: none;
}

button {
  border: 0;
  border-left: solid 1px #ccc;
  font-size: 24px;

  &:focus {
    outline: 0;
  }
   
  &:hover {
    border: 0;
    box-shadow: none;
    border-left: solid 1px #ccc;
  }
}
`;

const Span = styled.span`
width: 1%;
white-space: nowrap;
vertical-align: middle;
display: table-cell;
`;

const DivGroup = styled.div`
display: table;
`;

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
  };

  makeSearch = () => {
    this.props.makeSearch(this.state.search_title);
  };

  render() {
    return (
      <CenteredDiv>
        <DivSearch>
          <DivGroup>
            <Input
              onChange={this.handleSearchChange}
              onKeyPress={this.handleKeyPress}
              label={this.props.title}
              value={this.state.search_title}
              name="search_title"
            />
            <Span>
              <Button icon="search" onClick={this.makeSearch} primary />
            </Span>
          </DivGroup>
        </DivSearch>
      </CenteredDiv>
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
