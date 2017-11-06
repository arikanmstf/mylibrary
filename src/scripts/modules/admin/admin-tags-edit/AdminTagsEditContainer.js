import { connect } from 'react-redux';

import { getTagDetails } from 'modules/tag-details/TagDetailsActions';
import { updateTagDetails } from 'modules/admin/AdminActions';
import ItemEditComponent from 'modules/common/item/edit/ItemEditComponent';

const mapStateToProps = (state) => {
  return {
    item: state.tag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemDetails: (search) => dispatch(getTagDetails(search)),
    updateItemDetails: (form) => dispatch(updateTagDetails(form)),
    itemId: 'tagId',
    item_id: 'tag_id'
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditComponent);
