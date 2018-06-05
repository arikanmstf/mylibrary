import { connect } from 'react-redux';

import { getAllTags } from 'modules/tags/list/TagListActions';
import ItemListComponent from 'common/layout/item/list/ItemListComponent';

const mapStateToProps = (state) => {
  return {
    items: state.tags.list,
    total: +state.tags.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: (search) => dispatch(getAllTags(search)),
    item_id: 'tag_id',
    item_url: 'tags',
    title: 'Manage Tags'
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemListComponent);
