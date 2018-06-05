export const TagDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_TAG_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export const TagSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'RESOLVED_GET_TAG_BY_SEARCH':
      return action.data;
    case 'RESET_GET_TAG_BY_SEARCH':
      return action.data;
    default:
      return state;
  }
};
