import React from 'react';

import NavbarHeader from '../containers/navbarHeader';
import PublicationDetailsPage from '../containers/publicationDetailsPage';

const PublicationDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <PublicationDetailsPage publicationId={match.params.publicationId} />
  </div>
);

PublicationDetails.propTypes = {
  match: propTypes.Object.isRequired
};
export default PublicationDetails;
