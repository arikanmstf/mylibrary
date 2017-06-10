const initialState = {};

const BookDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_BOOK_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default BookDetailsReducer;
