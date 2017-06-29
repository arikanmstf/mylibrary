import React from 'react';
import PropTypes from 'prop-types';

import NavbarHeader from 'modules/common/NavbarHeader';
import BookDetailsPage from './BookDetailsPage';

const BookDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <BookDetailsPage bookId={match.params.bookId} />
  </div>
);

BookDetails.propTypes = {
  match: PropTypes.object.isRequired
};
export default BookDetails;
