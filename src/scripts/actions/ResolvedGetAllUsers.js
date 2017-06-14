import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedGetAllUsers(response) {
  return {
    type: 'RESOLVED_GET_ALL_USERS',
    data: response.data.response
  };
}

export function getAllUsers(search) {
	return function (dispatch) {
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
