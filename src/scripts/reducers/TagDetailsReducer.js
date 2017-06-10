const initialState = {};

const TagDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_TAG_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default TagDetailsReducer;
