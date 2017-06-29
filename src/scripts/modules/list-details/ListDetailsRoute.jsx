import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import ListDetailsPage from './ListDetailsPage';

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
