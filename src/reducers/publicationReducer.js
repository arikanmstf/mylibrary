const initialState = [];

const publicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_PUBLICATIONS':
			console.log(action)
      return action.data;
    default:
      return state;
  }
};

export default publicationReducer;
