import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
                <Link className="navbar-brand" to="/">MyLibray</Link>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="/admin">Admin</Link></li>
              </ul>
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
