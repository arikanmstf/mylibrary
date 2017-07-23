import { connect } from 'react-redux';

import { getWriterBySearch, resetGetWriterBySearch, getBookBySearch } from 'modules/admin/admin-books/AdminBooksActions';
import { addBookDetails } from 'modules/admin/AdminActions';
import AdminBooksAddComponent from './AdminBooksAddComponent';

const mapStateToProps = (state) => {
	return {
		writerSearch: state.writerSearch,
		bookSearch: state.bookSearch,
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWriterBySearch: (search) => dispatch(getWriterBySearch(search)),
    getBookBySearch: (search) => dispatch(getBookBySearch(search)),
    resetGetWriterBySearch: () => dispatch(resetGetWriterBySearch()),
    addBookDetails: (form) => dispatch(addBookDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBooksAddComponent);
