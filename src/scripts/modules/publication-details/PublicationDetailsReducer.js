const initialState = {};

const PublicationDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_PUBLICATION_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default PublicationDetailsReducer;
