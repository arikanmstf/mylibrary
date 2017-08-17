import { connect } from 'react-redux';

import PublisherDetailsComponent from './PublisherDetailsComponent';
import { getPublisherDetails } from './PublisherDetailsActions';

const mapStateToProps = (state) => {
  return {
    publisher: state.publisher
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getPublisherDetails: (publisherId) => dispatch(getPublisherDetails(publisherId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublisherDetailsComponent);
