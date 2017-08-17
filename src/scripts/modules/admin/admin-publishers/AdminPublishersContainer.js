import { connect } from 'react-redux';

import { getAllPublishers } from './AdminPublishersActions';
import AdminPublishersComponent from './AdminPublishersComponent';

const mapStateToProps = (state) => {
  return {
    publishers: state.publishers.list,
    total: parseInt(state.publishers.total, 10)
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllPublishers: (search) => dispatch(getAllPublishers(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublishersComponent);
