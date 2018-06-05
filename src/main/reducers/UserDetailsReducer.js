const initialState = {};

const UserDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_USER_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default UserDetailsReducer;
