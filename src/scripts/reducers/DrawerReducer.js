const initialState = false;

const DrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_DRAWER_ACTIVE':
      return true;
    case 'RESOLVED_DRAWER_INACTIVE':
      return false;
    default:
      return state;
  }
};

export default DrawerReducer;
