import { connect } from 'react-redux';

import BookDetailsComponent from './BookDetailsComponent';
import { getBookDetails } from './BookDetailsActions';

const mapStateToProps = (state) => {
	return {
		book: state.book
	};
};

const mapDispatchToProps = (dispatch) => {
  return { getBookDetails: (bookId) => dispatch(getBookDetails(bookId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsComponent);
