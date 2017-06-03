import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputText from './inputText';

export default class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);

  }

  handleSearchChange(value) {
    if(this.props.onSearchChange) {
      this.props.onSearchChange(value);
    }
  }

  render() {
    return (
      <div className="input-search">
        <InputText
          onChange={ this.handleSearchChange }
          className="navbar-header-search"
          placeholder="Type to search a book..."/>
      </div>
    );
  }
}
