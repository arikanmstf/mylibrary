import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'common/layout/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetAllTags(response) {
  return {
    type: 'RESOLVED_GET_ALL_TAGS',
    data: response.data.response
  };
}

export function getAllTags(search) {
  return (dispatch) => {
    dispatch(StartedRequest());
    axios.get(API.getAllTags, {
      params: {
        title: search.title,
        login_key: Storage.get('login_key'),
        page: search.pageNo
      }
    })
    .then((response) => dispatch(ResolvedGetAllTags(response)))
    .catch((msg) => {
      const message = createErrorMessage(msg);
      dispatch(openModal(message));
    });
  };
}
