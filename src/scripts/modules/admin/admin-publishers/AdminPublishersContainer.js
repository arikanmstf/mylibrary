import { connect } from 'react-redux';

import { getAllPublishers } from './AdminPublishersActions';
import AdminPublishersComponent from './AdminPublishersComponent';

const mapStateToProps = (state) => {
  return {
    publishers: state.publishers.list,
    total: +state.publishers.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllPublishers: (search) => dispatch(getAllPublishers(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublishersComponent);
