import { connect } from 'react-redux';

import { getAllTags } from 'modules/tag-list/TagListActions';
import AdminTagsComponent from './AdminTagsComponent';

const mapStateToProps = (state) => {
  return {
    tags: state.tags.list,
    total: parseInt(state.tags.total, 10)
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllTags: (search) => dispatch(getAllTags(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminTagsComponent);
