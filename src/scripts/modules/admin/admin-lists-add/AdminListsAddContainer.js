import { connect } from 'react-redux';

import { addListDetails } from 'modules/admin/AdminActions';
import AdminListsAddComponent from './AdminListsAddComponent';

const mapDispatchToProps = (dispatch) => {
  return {
    addListDetails: (form) => dispatch(addListDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(AdminListsAddComponent);
