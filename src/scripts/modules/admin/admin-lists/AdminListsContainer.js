import { connect } from 'react-redux';

import { getAllLists } from 'modules/list-list/ListListActions';
import AdminListsComponent from './AdminListsComponent';

const mapStateToProps = (state) => {
  return {
   lists: state.lists.list,
   total: parseInt(state.lists.total, 10)
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllLists: (search) => dispatch(getAllLists(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminListsComponent);
