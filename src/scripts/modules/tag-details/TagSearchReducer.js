const initialState = [];

const TagSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_TAG_BY_SEARCH':
      return action.data;
    case 'RESET_GET_TAG_BY_SEARCH':
      return action.data;
    default:
      return state;
  }
};

export default TagSearchReducer;
