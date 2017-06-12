const initialState = [];

const TagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_TAGS':
      return action.data;
    default:
      return state;
  }
};

export default TagReducer;
