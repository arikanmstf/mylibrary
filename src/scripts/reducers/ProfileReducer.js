const initialState = {};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_PROFILE_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default ProfileReducer;
