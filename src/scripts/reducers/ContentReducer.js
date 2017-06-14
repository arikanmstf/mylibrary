const initialState = true;

const ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_ALL_BOOKS':
    case 'RESOLVED_GET_ALL_LISTS':
    case 'RESOLVED_GET_ALL_PUBLICATIONS':
    case 'RESOLVED_GET_ALL_PUBLISHERS':
    case 'RESOLVED_GET_ALL_TAGS':
    case 'RESOLVED_GET_ALL_USERS':
    case 'RESOLVED_GET_ALL_WRITERS':
    case 'RESOLVED_GET_BOOK_BY_SEARCH':
    case 'RESOLVED_GET_BOOK_DETAILS':
    case 'RESOLVED_GET_LIST_BY_SEARCH':
    case 'RESOLVED_GET_LIST_DETAILS':
    case 'RESOLVED_GET_LOGIN':
    case 'RESOLVED_GET_PUBLICATION_DETAILS':
    case 'RESOLVED_GET_PUBLISHER_BY_SEARCH':
    case 'RESOLVED_GET_PUBLISHER_DETAILS':
    case 'RESOLVED_GET_TAG_BY_SEARCH':
    case 'RESOLVED_GET_TAG_DETAILS':
    case 'RESOLVED_GET_WRITER_BY_SEARCH':
    case 'RESOLVED_GET_WRITER_DETAILS':
    case 'RESOLVED_UPDATE_PUBLICATION_DETAILS':
    case 'RESOLVED_UPDATE_BOOK_DETAILS':
    case 'RESOLVED_UPDATE_WRITER_DETAILS':
    case 'RESOLVED_UPDATE_PUBLISHER_DETAILS':
      return true;
    case 'RESOLVED_CONTENT_NOT_LOADED':
      return false;
    default:
      return state;
  }
};

export default ContentReducer;
