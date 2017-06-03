import React, { Component } from 'react';
import PublicationList from '../containers/publicationList';
import LoginPage from '../containers/loginPage';
import storage from '../common/storage';

let s = new storage();
let isLoggedIn = s.get("login_key");

export default class App extends Component {
  render() {
    return (
      <div>
        { isLoggedIn ? (
      	   <PublicationList />
        ) : (
          <LoginPage />
        ) }
      </div>
    );
  }
}
