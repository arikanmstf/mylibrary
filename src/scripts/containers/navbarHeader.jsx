import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../components/input/inputText';

export default class NavbarHeader extends Component {
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
      <div className="navbar-header-container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">MyLibray</a>
            </div>

          </div>
        </nav>
        <div className="input-search-container">
            <InputText
              onChange={ this.handleSearchChange }
              className="navbar-header-search"
              placeholder="Type to search a book..."/>
        </div>
      </div>
    );
  }
}
