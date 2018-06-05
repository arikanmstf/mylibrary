import { connect } from 'react-redux';

import ItemAddComponent from 'common/layout/item/add/ItemAddComponent';
import { addListDetails } from 'modules/admin/AdminActions';

const mapDispatchToProps = (dispatch) => {
  return {
    addItemDetails: (form) => dispatch(addListDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(ItemAddComponent);
