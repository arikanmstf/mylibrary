import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import PublisherDetailsPage from './PublisherDetailsPage';

const PublisherDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <PublisherDetailsPage publisherId={match.params.publisherId} />
  </div>
);

PublisherDetails.propTypes = {
  match: PropTypes.object.isRequired
};
export default PublisherDetails;
