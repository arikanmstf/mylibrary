import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from '../containers/navbarHeader';
import WriterDetailsPage from '../containers/WriterDetailsPage';

const WriterDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <WriterDetailsPage writerId={match.params.writerId} />
  </div>
);

WriterDetails.propTypes = {
  match: PropTypes.object.isRequired
};
export default WriterDetails;
