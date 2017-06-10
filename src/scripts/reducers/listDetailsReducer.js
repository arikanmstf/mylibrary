const initialState = {};

const listDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LIST_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default listDetailsReducer;
