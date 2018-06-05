import { connect } from 'react-redux';
import { getAllUsers } from './AdminUsersActions';
import AdminUsersComponent from './AdminUsersComponent';

const mapStateToProps = (state) => {
  return {
    users: state.users.list,
    total: +state.users.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllUsers: (search) => dispatch(getAllUsers(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersComponent);
