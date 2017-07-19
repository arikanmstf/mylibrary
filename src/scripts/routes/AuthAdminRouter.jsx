import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import AdminPublications from 'modules/admin/admin-publications/AdminPublicationsContainer';
import AdminPublicationsEdit from 'modules/admin/admin-publications-edit/AdminPublicationsEditContainer';
import AdminPublicationsAdd from 'modules/admin/admin-publications-add/AdminPublicationsAddContainer';

import AdminBooks from 'modules/admin/admin-books/AdminBooksContainer';
import AdminBooksEdit from 'modules/admin/admin-books-edit/AdminBooksEditContainer';
import AdminBooksAdd from 'modules/admin/admin-books-add/AdminBooksAddContainer';

import AdminWriters from 'modules/admin/admin-writers/AdminWritersContainer';
import AdminWritersEdit from 'modules/admin/admin-writers-edit/AdminWritersEditContainer';
import AdminWritersAdd from 'modules/admin/admin-writers-add/AdminWritersAddContainer';

import AdminPublishers from 'modules/admin/admin-publishers/AdminPublishersContainer';
import AdminPublishersEdit from 'modules/admin/admin-publishers-edit/AdminPublishersEditContainer';
import AdminPublishersAdd from 'modules/admin/admin-publishers-add/AdminPublishersAddContainer';

import AdminUsers from 'modules/admin/admin-users/AdminUsersContainer';
import AdminUsersEdit from 'modules/admin/admin-users-edit/AdminUsersEditContainer';
import AdminUsersAdd from 'modules/admin/admin-users-add/AdminUsersAddContainer';

import AdminTags from 'modules/admin/admin-tags/AdminTagsContainer';
import AdminTagsEdit from 'modules/admin/admin-tags-edit/AdminTagsEditContainer';
import AdminTagsAdd from 'modules/admin/admin-tags-add/AdminTagsAddContainer';

import AdminLists from 'modules/admin/admin-lists/AdminListsContainer';
import AdminListsEdit from 'modules/admin/admin-lists-edit/AdminListsEditContainer';
import AdminListsAdd from 'modules/admin/admin-lists-add/AdminListsAddContainer';

import SideNavigation from 'modules/common/SideNavigation';

class AuthAdminRouter extends Component {
  render() {
    return (
      <div>
        <SideNavigation />
        <div className="admin-page col-xs-12 col-sm-9 col-md-9">
          <Route exact path={this.props.match.path} component={AdminPublications} />
          <Route exact path={`${this.props.match.path}/publications`} component={AdminPublications} />
          <Route exact path={`${this.props.match.path}/publications/add`} component={AdminPublicationsAdd} />
          <Route exact path={`${this.props.match.path}/publications/pages/:pageNo`} component={AdminPublications} />
          <Route exact path={`${this.props.match.path}/publications/edit/:publicationId`} component={AdminPublicationsEdit} />

          <Route exact path={`${this.props.match.path}/books`} component={AdminBooks} />
          <Route exact path={`${this.props.match.path}/books/add`} component={AdminBooksAdd} />
          <Route exact path={`${this.props.match.path}/books/pages/:pageNo`} component={AdminBooks} />
          <Route exact path={`${this.props.match.path}/books/edit/:bookId`} component={AdminBooksEdit} />

          <Route exact path={`${this.props.match.path}/writers`} component={AdminWriters} />
          <Route exact path={`${this.props.match.path}/writers/add`} component={AdminWritersAdd} />
          <Route exact path={`${this.props.match.path}/writers/pages/:pageNo`} component={AdminWriters} />
          <Route exact path={`${this.props.match.path}/writers/edit/:writerId`} component={AdminWritersEdit} />

          <Route exact path={`${this.props.match.path}/publishers`} component={AdminPublishers} />
          <Route exact path={`${this.props.match.path}/publishers/add`} component={AdminPublishersAdd} />
          <Route exact path={`${this.props.match.path}/publishers/pages/:pageNo`} component={AdminPublishers} />
          <Route exact path={`${this.props.match.path}/publishers/edit/:publisherId`} component={AdminPublishersEdit} />

          <Route exact path={`${this.props.match.path}/users`} component={AdminUsers} />
          <Route exact path={`${this.props.match.path}/users/add`} component={AdminUsersAdd} />
          <Route exact path={`${this.props.match.path}/users/pages/:pageNo`} component={AdminUsers} />
          <Route exact path={`${this.props.match.path}/users/edit/:userId`} component={AdminUsersEdit} />

          <Route exact path={`${this.props.match.path}/tags`} component={AdminTags} />
          <Route exact path={`${this.props.match.path}/tags/add`} component={AdminTagsAdd} />
          <Route exact path={`${this.props.match.path}/tags/pages/:pageNo`} component={AdminTags} />
          <Route exact path={`${this.props.match.path}/tags/edit/:tagId`} component={AdminTagsEdit} />

          <Route exact path={`${this.props.match.path}/lists`} component={AdminLists} />
          <Route exact path={`${this.props.match.path}/lists/add`} component={AdminListsAdd} />
          <Route exact path={`${this.props.match.path}/lists/pages/:pageNo`} component={AdminLists} />
          <Route exact path={`${this.props.match.path}/lists/edit/:listId`} component={AdminListsEdit} />
        </div>
      </div>
    );
  }
}

AuthAdminRouter.propTypes = {
  match: PropTypes.object.isRequired
};

export default AuthAdminRouter;
