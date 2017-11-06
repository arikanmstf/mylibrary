import { connect } from 'react-redux';

import { getAllLists } from 'modules/list-list/ListListActions';
import ItemListComponent from 'modules/common/item/list/ItemListComponent';

const mapStateToProps = (state) => {
  return {
    items: state.lists.list,
    total: +state.lists.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: (search) => dispatch(getAllLists(search)),
    item_id: 'list_id',
    item_url: 'lists',
    title: 'Manage Lists'
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemListComponent);
