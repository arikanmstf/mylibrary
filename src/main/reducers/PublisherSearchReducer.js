const initialState = [];

const PublisherSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_PUBLISHER_BY_SEARCH':
      return action.data;
    case 'RESET_GET_PUBLISHER_BY_SEARCH':
      return action.data;
    default:
      return state;
  }
};

export default PublisherSearchReducer;
