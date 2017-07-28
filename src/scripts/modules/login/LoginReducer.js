const initialState = [];

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LOGIN':
      return action.data;
    default:
      return state;
  }
};

export default LoginReducer;
