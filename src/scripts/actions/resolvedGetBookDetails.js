import axios from 'axios';
import Storage from '../common/storage';
import { API } from '../common/config';

export function resolvedGetBookDetails(response) {
  return {
    type: 'RESOLVED_GET_BOOK_DETAILS',
    data: response.data.response
  };
}

export function getBookDetails(bookId) {
	return function (dispatch) {
		axios.get(API.getBookDetails, {
				params: {
					book_id: bookId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(resolvedGetBookDetails(response)));
	};
}
