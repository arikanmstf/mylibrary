import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import WriterDetailsPage from './WriterDetailsPage';

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
