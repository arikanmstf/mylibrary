import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import BookDetails from 'modules/book-details/BookDetailsContainer';
import Home from 'modules/home/HomeComponent';
import PublicationDetails from 'modules/publication-details/PublicationDetailsContainer';
import WriterDetails from 'modules/writer-details/WriterDetailsContainer';
import ListDetails from 'modules/list-details/ListDetailsContainer';
import TagDetails from 'modules/tag-details/TagDetailsContainer';
import PublisherDetails from 'modules/publisher-details/PublisherDetailsContainer';
import Profile from 'modules/profile/ProfileContainer';

import AdminPage from 'modules/admin/AdminPage';

class AuthUserRouter extends Component {
  render() {
    return (
    <div>
      <Route exact path={this.props.match.path} component={Home} />
      <Route exact path={`${this.props.match.path}pages/:pageNo`} component={Home} />
      <Route exact path={`${this.props.match.path}publications/:publicationId`} component={PublicationDetails} />
      <Route exact path={`${this.props.match.path}writers/:writerId`} component={WriterDetails} />
      <Route exact path={`${this.props.match.path}lists/:listId`} component={ListDetails} />
      <Route exact path={`${this.props.match.path}books/:bookId`} component={BookDetails} />
      <Route exact path={`${this.props.match.path}tags/:tagId`} component={TagDetails} />
      <Route exact path={`${this.props.match.path}publishers/:publisherId`} component={PublisherDetails} />
      <Route exact path={`${this.props.match.path}profile`} component={Profile} />

      <Route exact path="/admin" component={AdminPage} />
    </div>);
  }
}

AuthUserRouter.propTypes = {
  match: PropTypes.object.isRequired
};

export default AuthUserRouter;
