const initialState = [];

const PublicationListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_PUBLICATIONS':
      return action.data;
    default:
      return state;
  }
};

export default PublicationListReducer;
