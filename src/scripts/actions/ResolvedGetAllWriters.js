import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedGetAllWriters(response) {
  return {
    type: 'RESOLVED_GET_ALL_WRITERS',
    data: response.data.response
  };
}

export function getAllWriters(search) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getAllWriters, {
				params: {
					title: search.title,
					login_key: Storage.get('login_key'),
          page: search.pageNo
				}
			})
		.then((response) => dispatch(ResolvedGetAllWriters(response)));
	};
}
