import { connect } from 'react-redux';

import { getTagDetails } from './TagDetailsActions';
import TagDetailsComponent from './TagDetailsComponent';

const mapStateToProps = (state) => {
  return {
    tag: state.tag
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getTagDetails: (tagId) => dispatch(getTagDetails(tagId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagDetailsComponent);
