import axios from 'axios';
import qs from 'qs';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedUpdateProfileDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_PROFILE_DETAILS',
    data: response.data.response
  };
}

export function updateProfileDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.updateProfileDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdateProfileDetails(response)));
	};
}
