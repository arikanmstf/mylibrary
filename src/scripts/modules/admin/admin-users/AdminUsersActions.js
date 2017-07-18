import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';

export function ResolvedGetAllUsers(response) {
  return {
    type: 'RESOLVED_GET_ALL_USERS',
    data: response.data.response
  };
}

export function getAllUsers(search) {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getAllUsers, {
				params: {
					title: search.title,
					login_key: Storage.get('login_key'),
          page: search.pageNo
				}
			})
		.then((response) => dispatch(ResolvedGetAllUsers(response)));
	};
}

export function ResolvedGetUserDetails(response) {
  return {
    type: 'RESOLVED_GET_USER_DETAILS',
    data: response.data.response
  };
}

export function getUserDetails(userId) {
	return (dispatch) => {
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