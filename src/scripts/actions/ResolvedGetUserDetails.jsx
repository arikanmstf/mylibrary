import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedGetUserDetails(response) {
  return {
    type: 'RESOLVED_GET_USER_DETAILS',
    data: response.data.response
  };
}

export function getUserDetails(userId) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getUserDetails, {
				params: {
					user_id: userId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetUserDetails(response)));
	};
}
