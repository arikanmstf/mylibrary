import { connect } from 'react-redux';

import { getListDetails } from 'modules/list-details/ListDetailsActions';
import { updateListDetails } from 'modules/admin/AdminActions';
import ItemEditComponent from 'modules/common/item/edit/ItemEditComponent';

const mapStateToProps = (state) => {
  return {
    item: state.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemDetails: (search) => dispatch(getListDetails(search)),
    updateItemDetails: (form) => dispatch(updateListDetails(form)),
    itemId: 'listId',
    item_id: 'list_id'
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditComponent);
