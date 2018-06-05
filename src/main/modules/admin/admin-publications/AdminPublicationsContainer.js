import { connect } from 'react-redux';

import { getAllPublications } from 'modules/publications/list/PublicationListActions';
import AdminPublicationsComponent from './AdminPublicationsComponent';

const mapStateToProps = (state) => {
  return {
    publications: state.publications.list,
    total: +state.publications.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllPublications: (search) => dispatch(getAllPublications(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublicationsComponent);
