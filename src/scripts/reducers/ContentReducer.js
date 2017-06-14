const initialState = false;

const ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_BOOKS':
    case 'RESOLVED_GET_ALL_LISTS':
    case 'RESOLVED_GET_ALL_PUBLICATIONS':
    case 'RESOLVED_GET_ALL_PUBLISHERS':
    case 'RESOLVED_GET_ALL_TAGS':
    case 'RESOLVED_GET_ALL_USERS':
    case 'RESOLVED_GET_ALL_WRITERS':
      return true;
    case 'RESOLVED_CONTENT_NOT_LOADED':
      return false;
    default:
      return state;
  }
};

export default ContentReducer;
