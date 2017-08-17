import { connect } from 'react-redux';

import { getTagDetails } from 'modules/tag-details/TagDetailsActions';
import { updateTagDetails } from 'modules/admin/AdminActions';
import AdminTagsEditComponent from './AdminTagsEditComponent';

const mapStateToProps = (state) => {
  return {
    tag: state.tag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTagDetails: (search) => dispatch(getTagDetails(search)),
    updateTagDetails: (form) => dispatch(updateTagDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminTagsEditComponent);
