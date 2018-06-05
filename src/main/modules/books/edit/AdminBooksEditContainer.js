import { connect } from 'react-redux';

import { getBookDetails } from 'modules/books/details/BookDetailsActions';
import { getWriterBySearch, resetGetWriterBySearch } from 'modules/admin/admin-books/AdminBooksActions';
import { updateBookDetails } from 'modules/admin/AdminActions';

import AdminBooksEditComponent from './AdminBooksEditComponent';

const mapStateToProps = (state) => {
  return {
    book: state.book,
    writerSearch: state.writerSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookDetails: (search) => dispatch(getBookDetails(search)),
    getWriterBySearch: (search) => dispatch(getWriterBySearch(search)),
    resetGetWriterBySearch: () => dispatch(resetGetWriterBySearch()),
    updateBookDetails: (form) => dispatch(updateBookDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBooksEditComponent);
