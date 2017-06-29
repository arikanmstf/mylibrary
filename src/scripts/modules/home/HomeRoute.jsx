import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';

const HomeRoute = ({ match }) => (
  <div>
    <HomePage match={match} />
  </div>
);
HomeRoute.propTypes = {
  match: PropTypes.object.isRequired
};
export default HomeRoute;
