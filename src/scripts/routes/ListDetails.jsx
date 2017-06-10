import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../containers/navbarHeader';
import ListDetailsPage from '../containers/ListDetailsPage';

const ListDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <ListDetailsPage listId={match.params.listId} />
  </div>
);

ListDetails.propTypes = {
  match: PropTypes.object.isRequired
};
export default ListDetails;
