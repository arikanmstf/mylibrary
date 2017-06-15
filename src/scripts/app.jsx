import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Storage from './common/Storage';
import BookDetails from './routes/BookDetails';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import PublicationDetails from './routes/PublicationDetails';
import WriterDetails from './routes/WriterDetails';
import ListDetails from './routes/ListDetails';
import TagDetails from './routes/TagDetails';
import PublisherDetails from './routes/PublisherDetails';
import Profile from './routes/Profile';

import AdminPublications from './routes/admin/AdminPublications';
import AdminPublicationsEdit from './routes/admin/AdminPublicationsEdit';
import AdminPublicationsAdd from './routes/admin/AdminPublicationsAdd';

import AdminBooks from './routes/admin/AdminBooks';
import AdminBooksEdit from './routes/admin/AdminBooksEdit';
import AdminBooksAdd from './routes/admin/AdminBooksAdd';

import AdminWriters from './routes/admin/AdminWriters';
import AdminWritersEdit from './routes/admin/AdminWritersEdit';
import AdminWritersAdd from './routes/admin/AdminWritersAdd';

import AdminPublishers from './routes/admin/AdminPublishers';
import AdminPublishersEdit from './routes/admin/AdminPublishersEdit';
import AdminPublishersAdd from './routes/admin/AdminPublishersAdd';

import AdminUsers from './routes/admin/AdminUsers';
import AdminUsersEdit from './routes/admin/AdminUsersEdit';
import AdminUsersAdd from './routes/admin/AdminUsersAdd';

import AdminTags from './routes/admin/AdminTags';
import AdminTagsEdit from './routes/admin/AdminTagsEdit';
import AdminTagsAdd from './routes/admin/AdminTagsAdd';

import AdminLists from './routes/admin/AdminLists';
import AdminListsEdit from './routes/admin/AdminListsEdit';
import AdminListsAdd from './routes/admin/AdminListsAdd';

import LoginPage from './containers/LoginPage';

const isLoggedIn = Storage.get('login_key');

class App extends Component {

  constructor(props) {
		super(props);
		this.state = props;
	}
  componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	}
  render() {
    return (
      <div className="main-container">
        { isLoggedIn ?
          <div>
            { !this.state.contentLoaded ?
            <div>
              <div className="loadingBaseLayer" />
              <div className="loadingSpinnerContainer">
                <center><img src="/assets/img/loading.gif" width="35" height="35" /></center>
              </div>
            </div> : null }
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pages/:pageNo" component={Home} />
                <Route exact path={`/publications/:publicationId`} component={PublicationDetails} />
                <Route exact path={`/writers/:writerId`} component={WriterDetails} />
                <Route exact path={`/lists/:listId`} component={ListDetails} />
                <Route exact path={`/books/:bookId`} component={BookDetails} />
                <Route exact path={`/tags/:tagId`} component={TagDetails} />
                <Route exact path={`/publishers/:publisherId`} component={PublisherDetails} />
                <Route exact path={`/profile`} component={Profile} />

                <Route exact path="/admin" component={AdminPublications} />

                <Route exact path="/admin/publications" component={AdminPublications} />
                <Route exact path="/admin/publications/add" component={AdminPublicationsAdd} />
                <Route exact path="/admin/publications/:pageNo" component={AdminPublications} />
                <Route exact path="/admin/publications/edit/:publicationId" component={AdminPublicationsEdit} />

                <Route exact path="/admin/books" component={AdminBooks} />
                <Route exact path="/admin/books/add" component={AdminBooksAdd} />
                <Route exact path="/admin/books/:pageNo" component={AdminBooks} />
                <Route exact path="/admin/books/edit/:bookId" component={AdminBooksEdit} />

                <Route exact path="/admin/writers" component={AdminWriters} />
                <Route exact path="/admin/writers/add" component={AdminWritersAdd} />
                <Route exact path="/admin/writers/:pageNo" component={AdminWriters} />
                <Route exact path="/admin/writers/edit/:writerId" component={AdminWritersEdit} />

                <Route exact path="/admin/publishers" component={AdminPublishers} />
                <Route exact path="/admin/publishers/add" component={AdminPublishersAdd} />
                <Route exact path="/admin/publishers/:pageNo" component={AdminPublishers} />
                <Route exact path="/admin/publishers/edit/:publisherId" component={AdminPublishersEdit} />

                <Route exact path="/admin/users" component={AdminUsers} />
                <Route exact path="/admin/users/add" component={AdminUsersAdd} />
                <Route exact path="/admin/users/:pageNo" component={AdminUsers} />
                <Route exact path="/admin/users/edit/:userId" component={AdminUsersEdit} />

                <Route exact path="/admin/tags" component={AdminTags} />
                <Route exact path="/admin/tags/add" component={AdminTagsAdd} />
                <Route exact path="/admin/tags/:pageNo" component={AdminTags} />
                <Route exact path="/admin/tags/edit/:tagId" component={AdminTagsEdit} />

                <Route exact path="/admin/lists" component={AdminLists} />
                <Route exact path="/admin/lists/add" component={AdminListsAdd} />
                <Route exact path="/admin/lists/:pageNo" component={AdminLists} />
                <Route exact path="/admin/lists/edit/:listId" component={AdminListsEdit} />

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
App.propTypes = {
  contentLoaded: PropTypes.bool
};
App.defaultProps = {
  contentLoaded: true
};

function mapStateToProps(state) {
	return {
		contentLoaded: state.contentLoaded
	};
}

export default connect(mapStateToProps)(App);
