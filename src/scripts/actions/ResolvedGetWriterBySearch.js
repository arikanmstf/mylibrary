import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';

export function ResolvedGetWriterBySearch(response) {
  return {
    type: 'RESOLVED_GET_WRITER_BY_SEARCH',
    data: response.data.response
  };
}

export function getWriterBySearch(title) {
	return function (dispatch) {
		axios.get(API.getWriterBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetWriterBySearch(response)));
	};
}
