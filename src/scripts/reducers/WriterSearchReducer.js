const initialState = [];

const WriterSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_WRITER_BY_SEARCH':
      return action.data;
    default:
      return state;
  }
};

export default WriterSearchReducer;
