const initialState = [];

const BookSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_BOOK_BY_SEARCH':
      return action.data;
    case 'RESET_GET_BOOK_BY_SEARCH':
      return action.data;
    default:
      return state;
  }
};

export default BookSearchReducer;
