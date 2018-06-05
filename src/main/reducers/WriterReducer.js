const initialState = [];

const WriterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_WRITERS':
      return action.data;
    default:
      return state;
  }
};

export default WriterReducer;
