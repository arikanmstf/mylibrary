const initialState = [];

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_BOOKS':
      return action.data;
    default:
      return state;
  }
};

export default BookReducer;
