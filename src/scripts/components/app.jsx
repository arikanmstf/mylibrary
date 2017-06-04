import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import storage from '../common/storage';

import PublicationList from '../containers/publicationList';
import LoginPage from '../containers/loginPage';
import NavbarHeader from '../containers/navbarHeader';
import PublicationDetailsPage from '../containers/publicationDetailsPage';
import WriterDetailsPage from '../containers/writerDetailsPage';

import InputSearch from './input/inputSearch';
import SideNavigation from './sideNavigation';

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
            <NavbarHeader />
            <InputSearch onSearchChange={ this.setSearchTitle } />
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
          <NavbarHeader />
          <SideNavigation />
          <h1>This is admin page.</h1>
      </div>
    );
  }
}

class NotFound extends Component {
  render() {
    return (
      <div>
          <NavbarHeader />
          <h1>404</h1>
          <h2>Requested page not found.</h2>
      </div>
    );
  }
}

const PublicationDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <PublicationDetailsPage publicationId={ match.params.publicationId }/>
  </div>
)
const WriterDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <WriterDetailsPage writerId={ match.params.writerId }/>
  </div>
)

export default class App extends Component {

  render() {
    return (
      <div className="main-container">
        { isLoggedIn ?
          <div>
            <Router>
              <div>
                <Route exact path="/" component={ Home } />
                <Route path="/admin" component={ Admin } />
                <Route path={`/publications/:publicationId`} component={ PublicationDetails }/>
                <Route path={`/writers/:writerId`} component={ WriterDetails }/>
                <Route path='*' component={ NotFound } />
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
