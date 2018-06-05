import { connect } from 'react-redux';

import { getAllBooks } from './AdminBooksActions';
import AdminBooksComponent from './AdminBooksComponent';

const mapStateToProps = (state) => {
  return {
    books: state.books.list,
    total: +state.books.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllBooks: (search) => dispatch(getAllBooks(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBooksComponent);
