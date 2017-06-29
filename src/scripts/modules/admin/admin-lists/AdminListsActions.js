import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';

export function ResolvedGetAllLists(response) {
  return {
    type: 'RESOLVED_GET_ALL_LISTS',
    data: response.data.response
  };
}

export function getAllLists(search) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getAllLists, {
				params: {
					title: search.title,
					login_key: Storage.get('login_key'),
          page: search.pageNo
				}
			})
		.then((response) => dispatch(ResolvedGetAllLists(response)));
	};
}
