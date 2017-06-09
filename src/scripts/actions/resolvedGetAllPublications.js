import axios from 'axios';
import { API } from '../common/config';
import Storage from '../common/storage';

export function resolvedGetAllPublications(response) {
  return {
    type: 'RESOLVED_GET_ALL_PUBLICATIONS',
    data: response.data.response
  };
}

export function getAllPublications(search) {
	return function (dispatch) {
		axios.get(API.getAllPublications, {
				params: {
					title: search.title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(resolvedGetAllPublications(response)));
	};
}
