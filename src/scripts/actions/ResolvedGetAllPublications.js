import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';

export function ResolvedGetAllPublications(response) {
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
					login_key: Storage.get('login_key'),
          page: search.pageNo
				}
			})
		.then((response) => dispatch(ResolvedGetAllPublications(response)));
	};
}
