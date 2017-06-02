import storage from "../common/storage";
const initialState = [];

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LOGIN':
      storage.set("login_key",action.data)
      return action.data;
    default:
      return state;
  }
};

export default loginPageReducer;
