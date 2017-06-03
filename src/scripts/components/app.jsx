import React, { Component } from 'react';
import PublicationList from '../containers/publicationList';
import LoginPage from '../containers/loginPage';
import storage from '../common/storage';
import NavbarHeader from '../containers/navbarHeader';

let s = new storage();
let isLoggedIn = s.get("login_key");

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        title: ''
      }
    };

    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  setSearchTitle(e){
    this.setState({
      search:{
        title:e
      }
    })
  }

  render() {
    return (
      <div className="main-container">
        { isLoggedIn ? (<NavbarHeader onSearchChange={ this.setSearchTitle } />) : null }
        { isLoggedIn ? (
      	   <PublicationList
             search={this.state.search} />
        ) : (
          <LoginPage />
        ) }
      </div>
    );
  }
}
