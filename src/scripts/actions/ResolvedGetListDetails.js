import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';

export function ResolvedGetListDetails(response) {
  return {
    type: 'RESOLVED_GET_LIST_DETAILS',
    data: response.data.response
  };
}

export function getListDetails(listId) {
	return function (dispatch) {
		axios.get(API.getListDetails, {
				params: {
					list_id: listId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(resolvedGetListDetails(response)));
	};
}
