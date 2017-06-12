const initialState = [];

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_USERS':
      return action.data;
    default:
      return state;
  }
};

export default UserReducer;
