import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../containers/NavbarHeader';
import PublicationDetailsPage from '../containers/PublicationDetailsPage';

const PublicationDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <PublicationDetailsPage publicationId={match.params.publicationId} />
  </div>
);

PublicationDetails.propTypes = {
  match: PropTypes.object.isRequired
};
export default PublicationDetails;
