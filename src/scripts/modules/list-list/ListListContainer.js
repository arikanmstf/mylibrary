import { connect } from 'react-redux';

import ListListComponent from './ListListComponent';
import { getAllLists } from './ListListActions';

const mapStateToProps = (state) => {
  return {
   lists: state.lists.list,
   total: parseInt(state.tags.total, 10)
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllLists: (search) => dispatch(getAllLists(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListListComponent);
