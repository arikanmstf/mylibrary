import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';

export function ResolvedGetPublisherDetails(response) {
  return {
    type: 'RESOLVED_GET_PUBLISHER_DETAILS',
    data: response.data.response
  };
}

export function getPublisherDetails(publisherId) {
	return function (dispatch) {
		axios.get(API.getPublisherDetails, {
				params: {
					publisher_id: publisherId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetPublisherDetails(response)));
	};
}
