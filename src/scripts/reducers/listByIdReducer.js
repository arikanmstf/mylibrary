const initialState = [];

const listByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LIST_BY_ID':
      return action.data;
    default:
      return state;
  }
};

export default listByIdReducer;
