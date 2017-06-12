import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Storage from './common/Storage';

import BookDetails from './routes/BookDetails';
import Home from './routes/Home';
import Pages from './routes/Pages';
import NotFound from './routes/NotFound';
import PublicationDetails from './routes/PublicationDetails';
import WriterDetails from './routes/WriterDetails';
import ListDetails from './routes/ListDetails';
import TagDetails from './routes/TagDetails';
import PublisherDetails from './routes/PublisherDetails';
import Admin from './routes/admin/Admin';
import AdminPublications from './routes/admin/AdminPublications';
import AdminPublicationsEdit from './routes/admin/AdminPublicationsEdit';
import AdminBooks from './routes/admin/AdminBooks';
import AdminBooksEdit from './routes/admin/AdminBooksEdit';
import AdminWriters from './routes/admin/AdminWriters';
import AdminPublishers from './routes/admin/AdminPublishers';

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
                <Route exact path={`/publications/:publicationId`} component={PublicationDetails} />
                <Route exact path={`/writers/:writerId`} component={WriterDetails} />
                <Route exact path={`/lists/:listId`} component={ListDetails} />
                <Route exact path={`/books/:bookId`} component={BookDetails} />
                <Route exact path={`/tags/:tagId`} component={TagDetails} />
                <Route exact path={`/publishers/:publisherId`} component={PublisherDetails} />

                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin/publications" component={AdminPublications} />
                <Route exact path="/admin/publications/:pageNo" component={AdminPublications} />
                <Route exact path="/admin/publications/edit/:publicationId" component={AdminPublicationsEdit} />
                <Route exact path="/admin/books" component={AdminBooks} />
                <Route exact path="/admin/books/:pageNo" component={AdminBooks} />
                <Route exact path="/admin/books/edit/:bookId" component={AdminBooksEdit} />
                <Route exact path="/admin/writers" component={AdminWriters} />
                <Route exact path="/admin/writers/:pageNo" component={AdminWriters} />
                <Route exact path="/admin/publishers" component={AdminPublishers} />
                <Route exact path="/admin/publishers/:pageNo" component={AdminPublishers} />

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
