import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Storage from './common/storage';

import Admin from './routes/Admin';
import BookDetails from './routes/BookDetails';
import Home from './routes/Home';
import Pages from './routes/Pages';
import NotFound from './routes/NotFound';
import PublicationDetails from './routes/PublicationDetails';
import WriterDetails from './routes/WriterDetails';
import ListDetails from './routes/ListDetails';
import TagDetails from './routes/TagDetails';
import PublisherDetails from './routes/PublisherDetails';

import LoginPage from './containers/LoginPage';

const isLoggedIn = Storage.get('login_key');

export default class App extends Component {

  render() {
    return (
      <div className="main-container">
        { isLoggedIn ?
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pages/:pageNo" component={Pages} />
                <Route path="/admin" component={Admin} />
                <Route path={`/publications/:publicationId`} component={PublicationDetails} />
                <Route path={`/writers/:writerId`} component={WriterDetails} />
                <Route path={`/lists/:listId`} component={ListDetails} />
                <Route path={`/books/:bookId`} component={BookDetails} />
                <Route path={`/tags/:tagId`} component={TagDetails} />
                <Route path={`/publishers/:publisherId`} component={PublisherDetails} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Router>
          </div>
          :
          <LoginPage />
        }
      </div>
    );
  }
}
