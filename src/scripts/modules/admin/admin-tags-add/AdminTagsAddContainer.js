import { connect } from 'react-redux';

import { addTagDetails } from '../AdminActions';
import AdminTagsAddComponent from './AdminTagsAddComponent';

const mapDispatchToProps = (dispatch) => {
  return {
    addTagDetails: (form) => dispatch(addTagDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(AdminTagsAddComponent);
