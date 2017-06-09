import React from 'react';

import NavbarHeader from '../containers/navbarHeader';
import BookDetailsPage from '../containers/BookDetailsPage';

const BookDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <BookDetailsPage bookId={match.params.bookId} />
  </div>
);

BookDetails.propTypes = {
  match: propTypes.Object.isRequired
};
export default BookDetails;
