import { connect } from 'react-redux';

import { addPublisherDetails } from 'modules/admin/AdminActions';
import AdminPublishersAddComponent from './AdminPublishersAddComponent';

const mapDispatchToProps = (dispatch) => {
  return {
    addPublisherDetails: (form) => dispatch(addPublisherDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(AdminPublishersAddComponent);
