import { connect } from 'react-redux';

import ItemAddComponent from 'common/layout/item/add/ItemAddComponent';
import { addTagDetails } from '../AdminActions';

const mapDispatchToProps = (dispatch) => {
  return {
    addItemDetails: (form) => dispatch(addTagDetails(form))
  };
};

export default connect(0, mapDispatchToProps)(ItemAddComponent);
