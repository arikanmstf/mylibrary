export const ListDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LIST_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export const ListSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LIST_BY_SEARCH':
      return action.data;
    case 'RESET_GET_LIST_BY_SEARCH':
      return action.data;
    default:
      return state;
  }
};
