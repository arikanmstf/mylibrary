import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Storage from 'common/Storage';
import BookDetails from 'modules/book-details/BookDetailsContainer';
import Home from 'modules/home/HomeComponent';
import NotFound from 'modules/not-found/NotFoundComponent';
import PublicationDetails from 'modules/publication-details/PublicationDetailsContainer';
import WriterDetails from 'modules/writer-details/WriterDetailsContainer';
import ListDetails from 'modules/list-details/ListDetailsContainer';
import TagDetails from 'modules/tag-details/TagDetailsContainer';
import PublisherDetails from 'modules/publisher-details/PublisherDetailsContainer';
import Profile from 'modules/profile/ProfileContainer';

import AdminPublications from 'modules/admin/admin-publications/AdminPublicationsRoute';
import AdminPublicationsEdit from 'modules/admin/admin-publications-edit/AdminPublicationsEditRoute';
import AdminPublicationsAdd from 'modules/admin/admin-publications-add/AdminPublicationsAddRoute';

import AdminBooks from 'modules/admin/admin-books/AdminBooksRoute';
import AdminBooksEdit from 'modules/admin/admin-books-edit/AdminBooksEditRoute';
import AdminBooksAdd from 'modules/admin/admin-books-add/AdminBooksAddRoute';

import AdminWriters from 'modules/admin/admin-writers/AdminWritersRoute';
import AdminWritersEdit from 'modules/admin/admin-writers-edit/AdminWritersEditRoute';
import AdminWritersAdd from 'modules/admin/admin-writers-add/AdminWritersAddRoute';

import AdminPublishers from 'modules/admin/admin-publishers/AdminPublishersRoute';
import AdminPublishersEdit from 'modules/admin/admin-publishers-edit/AdminPublishersEditRoute';
import AdminPublishersAdd from 'modules/admin/admin-publishers-add/AdminPublishersAddRoute';

import AdminUsers from 'modules/admin/admin-users/AdminUsersRoute';
import AdminUsersEdit from 'modules/admin/admin-users-edit/AdminUsersEditRoute';
import AdminUsersAdd from 'modules/admin/admin-users-add/AdminUsersAddRoute';

import AdminTags from 'modules/admin/admin-tags/AdminTagsRoute';
import AdminTagsEdit from 'modules/admin/admin-tags-edit/AdminTagsEditRoute';
import AdminTagsAdd from 'modules/admin/admin-tags-add/AdminTagsAddRoute';

import AdminLists from 'modules/admin/admin-lists/AdminListsRoute';
import AdminListsEdit from 'modules/admin/admin-lists-edit/AdminListsEditRoute';
import AdminListsAdd from 'modules/admin/admin-lists-add/AdminListsAddRoute';

import Login from 'modules/login/LoginContainer';

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
          <Login />
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
