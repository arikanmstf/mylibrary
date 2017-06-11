const initialState = [];

const ListSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LIST_BY_SEARCH':
      return action.data;
    case 'RESET_GET_LIST_BY_SEARCH':
      return action.data;
    default:
      return state;
  }
};

export default ListSearchReducer;
