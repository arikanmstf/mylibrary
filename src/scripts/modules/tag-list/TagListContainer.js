import { connect } from 'react-redux';

import TagListComponent from './TagListComponent';
import { getAllTags } from './TagListActions';

const mapStateToProps = (state) => {
  return {
    tags: state.tags.list,
    total: parseInt(state.tags.total, 10)
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllTags: (search) => dispatch(getAllTags(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagListComponent);
