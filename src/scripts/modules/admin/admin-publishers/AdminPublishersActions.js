import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'modules/common/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetAllPublishers(response) {
  return {
    type: 'RESOLVED_GET_ALL_PUBLISHERS',
    data: response.data.response
  };
}

export function getAllPublishers(search) {
  return (dispatch) => {
    dispatch(StartedRequest());
    axios.get(API.getAllPublishers, {
      params: {
        title: search.title,
        login_key: Storage.get('login_key'),
        page: search.pageNo
      }
    })
    .then((response) => dispatch(ResolvedGetAllPublishers(response)))
    .catch((msg) => {
      const message = createErrorMessage(msg);
      dispatch(openModal(message));
    });
  };
}
