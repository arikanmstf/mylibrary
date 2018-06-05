import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import AuthAdminRouter from 'routes/AuthAdminRouter';

import BookDetails from 'modules/books/details/';
import Home from 'modules/home/HomeComponent';
import PublicationDetails from 'modules/publications/details/';
import WriterDetails from 'modules/writers/details/';
import List from 'modules/lists/list/ListListContainer';
import ListDetails from 'modules/lists/details/ListDetailsContainer';
import Tags from 'modules/tags/list/TagListContainer';
import TagDetails from 'modules/tags/details/TagDetailsContainer';
import PublisherDetails from 'modules/publishers/details/PublisherDetailsContainer';
import Profile from 'modules/profile/ProfileContainer';

import NotFound from 'modules/not-found/NotFoundComponent';

const AuthUserRouter = (props) => (
  <div className="page-home">
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
