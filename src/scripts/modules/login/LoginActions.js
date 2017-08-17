import axios from 'axios';
import qs from 'qs';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'modules/common/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetLogin(response) {
  return {
    type: 'RESOLVED_GET_LOGIN',
    data: response.data.response
  };
}

export function getLogin(data) {
  return (dispatch) => {
    dispatch(StartedRequest());
    axios.post(API.getLogin, qs.stringify({
      username: data.username,
      password: data.password
    }))
    .then((response) => {
      Storage.set('login_key', response.data.response.key);
      Storage.set('is_admin', response.data.response.is_admin);
      window.location.href = window.location.href;
    })
    .catch((msg) => {
      const message = createErrorMessage(msg);
      dispatch(openModal(message));
    });
  };
}
export function getLogout() {
  return (dispatch) => {
    dispatch(StartedRequest());
    axios.post(API.getLogout, qs.stringify({
      login_key: Storage.get('login_key')
    }))
    .then(() => {
      Storage.delete('login_key');
      window.location.href = window.location.href;
    });
  };
}
