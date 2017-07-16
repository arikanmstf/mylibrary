const initialState = {
  phone_no: '',
  name: '',
  address: ''
};

const PublisherDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOLVED_GET_PUBLISHER_DETAILS':
      return action.data;
    default:
      return state;
  }
};

export default PublisherDetailsReducer;
