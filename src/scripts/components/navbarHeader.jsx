import React, { Component } from 'react';
import InputText from './input/inputText';

export default class NavbarHeader extends Component {
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
              className="navbar-header-search"
              placeholder="Type to search a book..."/>
        </div>
      </div>
    );
  }
}
