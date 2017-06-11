const initialState = {};

const WriterDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_WRITER_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default WriterDetailsReducer;