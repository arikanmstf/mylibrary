import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import PublicationDetailsPage from './PublicationDetailsPage';

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
