import { connect } from 'react-redux';

import { getAllWriters } from './AdminWritersActions';
import AdminWritersComponent from './AdminWritersComponent';

const mapStateToProps = (state) => {
  return {
    writers: state.writers.list,
    total: parseInt(state.writers.total, 10)
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllWriters: (search) => dispatch(getAllWriters(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminWritersComponent);
