import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'common/layout/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetAllWriters(response) {
  return {
    type: 'RESOLVED_GET_ALL_WRITERS',
    data: response.data.response
  };
}

export function getAllWriters(search) {
  return (dispatch) => {
    dispatch(StartedRequest());
    axios.get(API.getAllWriters, {
      params: {
        title: search.title,
        login_key: Storage.get('login_key'),
        page: search.pageNo
      }
    })
    .then((response) => dispatch(ResolvedGetAllWriters(response)))
    .catch((msg) => {
      const message = createErrorMessage(msg);
      dispatch(openModal(message));
    });
  };
}
