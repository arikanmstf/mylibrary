import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';

export function ResolvedGetWriterDetails(response) {
  return {
    type: 'RESOLVED_GET_WRITER_DETAILS',
    data: response.data.response
  };
}

export function getWriterDetails(writerId) {
	return function (dispatch) {
		axios.get(API.getWriterDetails, {
				params: {
					writer_id: writerId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(resolvedGetWriterDetails(response)));
	};
}
