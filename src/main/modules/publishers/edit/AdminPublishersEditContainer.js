import { connect } from 'react-redux';

import { getPublisherDetails } from 'modules/publishers/details/PublisherDetailsActions';
import { updatePublisherDetails } from 'modules/admin/AdminActions';
import AdminPublishersEditComponent from './AdminPublishersEditComponent';

const mapStateToProps = (state) => {
  return {
    publisher: state.publisher
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPublisherDetails: (search) => dispatch(getPublisherDetails(search)),
    updatePublisherDetails: (form) => dispatch(updatePublisherDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublishersEditComponent);
