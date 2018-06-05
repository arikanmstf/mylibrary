import { connect } from 'react-redux';

import { getListDetails } from 'modules/lists/details/ListDetailsActions';
import { updateListDetails } from 'modules/admin/AdminActions';
import ItemEditComponent from 'common/layout/item/edit/ItemEditComponent';

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
