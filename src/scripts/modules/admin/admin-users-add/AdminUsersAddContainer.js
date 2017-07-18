import { connect } from 'react-redux';

import { addUserDetails } from 'modules/admin/AdminActions';
import AdminUsersAddComponent from './AdminUsersAddComponent';

const mapDispatchToProps = (dispatch) => {
  return {
    addUserDetails: (form) => dispatch(addUserDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(AdminUsersAddComponent);
