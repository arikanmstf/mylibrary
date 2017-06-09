import axios from 'axios';
import Storage from '../common/storage';
import { API } from '../common/config';

export function resolvedGetWriterDetails(response) {
  return {
    type: 'RESOLVED_GET_WRITER_DETAILS',
    data: response.data.response
  }
}

export function getWriterDetails(writer_id) {
	return function (dispatch) {
		axios.get(API.getWriterDetails, {
				params: {
					writer_id: writer_id,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(resolvedGetWriterDetails(response)));
	};
}
