import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedGetBookBySearch(response) {
  return {
    type: 'RESOLVED_GET_BOOK_BY_SEARCH',
    data: response.data.response
  };
}

export function getBookBySearch(title) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getBookBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetBookBySearch(response)));
	};
}

export function ResolvedResetGetBookBySearch() {
  return {
    type: 'RESET_GET_BOOK_BY_SEARCH',
    data: []
  };
}

export function resetGetBookBySearch() {
	return function (dispatch) {
		dispatch(ResolvedResetGetBookBySearch());
	};
}
