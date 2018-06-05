import { connect } from 'react-redux';
import { getListBySearch, resetGetListBySearch } from 'modules/lists/details/ListDetailsActions';
import ListsOfPublicationEdit from './ListsOfPublicationEdit';

function mapStateToProps(state) {
  return {
    listSearch: state.listSearch
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListBySearch: (search) => dispatch(getListBySearch(search)),
    resetGetListBySearch: () => dispatch(resetGetListBySearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListsOfPublicationEdit);
