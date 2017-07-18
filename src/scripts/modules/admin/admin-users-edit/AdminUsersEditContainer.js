import { connect } from 'react-redux';

import { getUserDetails } from 'modules/admin/admin-users/AdminUsersActions';
import { updateUserDetails } from 'modules/admin/AdminActions';
import AdminUsersEditComponent from './AdminUsersEditComponent';

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (search) => dispatch(getUserDetails(search)),
    updateUserDetails: (form) => dispatch(updateUserDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersEditComponent);
