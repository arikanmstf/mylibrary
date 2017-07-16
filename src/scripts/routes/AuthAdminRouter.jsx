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

import NavbarHeader from 'modules/common/NavbarHeader';
import SideNavigation from 'modules/common/SideNavigation';

class AuthAdminRouter extends Component {
  render() {
    return (
      <div>
        <NavbarHeader />
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
          <Route exact path={`${this.props.match.path}/publishers/:pageNo`} component={AdminPublishers} />
          <Route exact path={`${this.props.match.path}/publishers/edit/:publisherId`} component={AdminPublishersEdit} />

          <Route exact path={`${this.props.match.path}/users`} component={AdminUsers} />
          <Route exact path={`${this.props.match.path}/users/add`} component={AdminUsersAdd} />
          <Route exact path={`${this.props.match.path}/users/:pageNo`} component={AdminUsers} />
          <Route exact path={`${this.props.match.path}/users/edit/:userId`} component={AdminUsersEdit} />

          <Route exact path={`${this.props.match.path}/tags`} component={AdminTags} />
          <Route exact path={`${this.props.match.path}/tags/add`} component={AdminTagsAdd} />
          <Route exact path={`${this.props.match.path}/tags/:pageNo`} component={AdminTags} />
          <Route exact path={`${this.props.match.path}/tags/edit/:tagId`} component={AdminTagsEdit} />

          <Route exact path={`${this.props.match.path}/lists`} component={AdminLists} />
          <Route exact path={`${this.props.match.path}/lists/add`} component={AdminListsAdd} />
          <Route exact path={`${this.props.match.path}/lists/:pageNo`} component={AdminLists} />
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
