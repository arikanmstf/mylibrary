import { connect } from 'react-redux';

import { getBookBySearch, resetGetBookBySearch, getPublisherBySearch, resetGetPublisherBySearch }
  from 'modules/admin/admin-books/AdminBooksActions';
import { addPublicationDetails } from 'modules/admin/AdminActions';

import AdminPublicationsAddComponent from './AdminPublicationsAddComponent';

const mapStateToProps = (state) => {
  return {
    bookSearch: state.bookSearch,
    publisherSearch: state.publisherSearch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookBySearch: (search) => dispatch(getBookBySearch(search)),
    resetGetBookBySearch: () => dispatch(resetGetBookBySearch()),
    getPublisherBySearch: (search) => dispatch(getPublisherBySearch(search)),
    resetGetPublisherBySearch: () => dispatch(resetGetPublisherBySearch()),
    addPublicationDetails: (form) => dispatch(addPublicationDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublicationsAddComponent);
