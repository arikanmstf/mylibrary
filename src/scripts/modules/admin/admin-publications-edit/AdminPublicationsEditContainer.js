import { connect } from 'react-redux';

import { getPublicationDetails } from 'modules/publication-details/PublicationDetailsActions';
import { getBookBySearch, resetGetBookBySearch, getPublisherBySearch, resetGetPublisherBySearch }
	from 'modules/admin/admin-books/AdminBooksActions';
import { updatePublicationDetails } from 'modules/admin/AdminActions';
import AdminPublicationsEditComponent from './AdminPublicationsEditComponent';

const mapStateToProps = (state) => {
  return {
    publication: state.publication,
    bookSearch: state.bookSearch,
    publisherSearch: state.publisherSearch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPublicationDetails: (search) => dispatch(getPublicationDetails(search)),
    getBookBySearch: (search) => dispatch(getBookBySearch(search)),
    resetGetBookBySearch: () => dispatch(resetGetBookBySearch()),
    getPublisherBySearch: (search) => dispatch(getPublisherBySearch(search)),
    resetGetPublisherBySearch: () => dispatch(resetGetPublisherBySearch()),
    updatePublicationDetails: (form) => dispatch(updatePublicationDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublicationsEditComponent);
