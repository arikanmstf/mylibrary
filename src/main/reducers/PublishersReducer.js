const initialState = [];

const PublishersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_PUBLISHERS':
      return action.data;
    default:
      return state;
  }
};

export default PublishersReducer;
