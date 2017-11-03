import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import AuthAdminRouter from 'routes/AuthAdminRouter';

import BookDetails from 'modules/book-details/BookDetailsContainer';
import Home from 'modules/home/HomeComponent';
import PublicationDetails from 'modules/publication-details/PublicationDetailsContainer';
import WriterDetails from 'modules/writer-details/WriterDetailsContainer';
import List from 'modules/list-list/ListListContainer';
import ListDetails from 'modules/list-details/ListDetailsContainer';
import Tags from 'modules/tag-list/TagListContainer';
import TagDetails from 'modules/tag-details/TagDetailsContainer';
import PublisherDetails from 'modules/publisher-details/PublisherDetailsContainer';
import Profile from 'modules/profile/ProfileContainer';

import NotFound from 'modules/not-found/NotFoundComponent';

const AuthUserRouter = (props) => (
  <div>
    <Switch>
      <Route exact path={props.match.path} component={Home} />
      <Route exact path={`${props.match.path}pages/:pageNo`} component={Home} />
      <Route exact path={`${props.match.path}publications/:publicationId`} component={PublicationDetails} />
      <Route exact path={`${props.match.path}writers/:writerId`} component={WriterDetails} />
      <Route exact path={`${props.match.path}lists/`} component={List} />
      <Route exact path={`${props.match.path}lists/:listId`} component={ListDetails} />
      <Route exact path={`${props.match.path}books/:bookId`} component={BookDetails} />
      <Route exact path={`${props.match.path}tags/`} component={Tags} />
      <Route exact path={`${props.match.path}tags/:tagId`} component={TagDetails} />
      <Route exact path={`${props.match.path}publishers/:publisherId`} component={PublisherDetails} />
      <Route exact path={`${props.match.path}profile`} component={Profile} />
      <Route path={`${props.match.path}admin`} component={AuthAdminRouter} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

AuthUserRouter.propTypes = {
  match: PropTypes.object.isRequired
};

export default AuthUserRouter;
