const initialState = {};

const ListDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LIST_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default ListDetailsReducer;
