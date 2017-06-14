import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedGetAllBooks(response) {
  return {
    type: 'RESOLVED_GET_ALL_BOOKS',
    data: response.data.response
  };
}

export function getAllBooks(search) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getAllBooks, {
				params: {
					title: search.title,
					login_key: Storage.get('login_key'),
          page: search.pageNo
				}
			})
		.then((response) => dispatch(ResolvedGetAllBooks(response)));
	};
}
