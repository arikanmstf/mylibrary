import React, { Component } from 'react';
import PublicationList from '../containers/publicationList';
import LoginPage from '../containers/loginPage';
import storage from '../common/storage';
import NavbarHeader from '../containers/navbarHeader';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

let s = new storage();
let isLoggedIn = s.get("login_key");

class Home extends Component {
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
          <div>
            <NavbarHeader onSearchChange={ this.setSearchTitle } />
            <PublicationList
              search={this.state.search} />
          </div>
    );
  }
}

class Admin extends Component {
  render() {
    return (
      <div>
          <h1>This is admin page.</h1>
      </div>
    );
  }
}

export default class App extends Component {

  render() {
    return (
      <div className="main-container">
        { isLoggedIn ?
          <div>
            <Router>
              <div>
                <Route exact path="/" component={ Home }/>
                <Route path="/admin" component={ Admin }/>
              </div>
            </Router>
          </div>
          :
          <LoginPage />
        }
      </div>
    );
  }
}
