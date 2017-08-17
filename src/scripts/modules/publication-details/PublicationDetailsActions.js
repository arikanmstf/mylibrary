import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'modules/common/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetPublicationDetails(response) {
  return {
    type: 'RESOLVED_GET_PUBLICATION_DETAILS',
    data: response.data.response
  };
}

export function getPublicationDetails(publicationId) {
  return (dispatch) => {
    dispatch(StartedRequest());
    axios.get(API.getPublicationDetails, {
      params: {
        publication_id: publicationId,
        login_key: Storage.get('login_key')
      }
    })
    .then((response) => dispatch(ResolvedGetPublicationDetails(response)))
    .catch((msg) => {
      const message = createErrorMessage(msg);
      dispatch(openModal(message));
    });
  };
}
