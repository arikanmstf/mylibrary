import axios from 'axios';
import qs from 'qs';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';

export function ResolvedGetLogin(response) {
  return {
    type: 'RESOLVED_GET_LOGIN',
    data: response.data.response
  };
}

export function getLogin(data) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.post(API.getLogin, qs.stringify({
			username: data.username,
			password: data.password
		}))
		.then((response) => {
			Storage.set('login_key', response.data.response);
			window.location.href = window.location.href;
		});
	};
}
export function getLogout() {
	return function (dispatch) {
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
