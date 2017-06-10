import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';

export function ResolvedGetTagDetails(response) {
  return {
    type: 'RESOLVED_GET_TAG_DETAILS',
    data: response.data.response
  };
}

export function getTagDetails(tagId) {
	return function (dispatch) {
		axios.get(API.getTagDetails, {
				params: {
					tag_id: tagId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetTagDetails(response)));
	};
}
