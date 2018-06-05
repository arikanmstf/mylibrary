import { connect } from 'react-redux';

import ListDetailsComponent from './ListDetailsComponent';
import { getListDetails } from './ListDetailsActions';

const mapStateToProps = (state) => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getListDetails: (listId) => dispatch(getListDetails(listId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDetailsComponent);
