const initialState = [];

const listsOfPublicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_LISTS_OF_PUBLICATION':
      return action.data;
    default:
      return state;
  }
};

export default listsOfPublicationReducer;
