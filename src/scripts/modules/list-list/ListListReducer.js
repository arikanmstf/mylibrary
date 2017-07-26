const initialState = [];

const ListListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_LISTS':
      return action.data;
    default:
      return state;
  }
};

export default ListListReducer;
