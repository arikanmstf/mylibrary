import { connect } from 'react-redux';

import ListListComponent from './ListListComponent';
import { getAllLists } from './ListListActions';

const mapStateToProps = (state) => {
  return {
    lists: state.lists.list,
    total: +state.tags.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllLists: (search) => dispatch(getAllLists(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListListComponent);
