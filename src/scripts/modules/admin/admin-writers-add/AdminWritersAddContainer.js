import { connect } from 'react-redux';

import { addWriterDetails } from 'modules/admin/AdminActions';
import AdminWritersAddComponent from './AdminWritersAddComponent';

const mapDispatchToProps = (dispatch) => {
  return {
    addWriterDetails: (form) => dispatch(addWriterDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(AdminWritersAddComponent);
