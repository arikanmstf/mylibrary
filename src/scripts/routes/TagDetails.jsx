import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../containers/NavbarHeader';
import TagDetailsPage from '../containers/TagDetailsPage';

const TagDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <TagDetailsPage tagId={match.params.tagId} />
  </div>
);

TagDetails.propTypes = {
  match: PropTypes.object.isRequired
};
export default TagDetails;
