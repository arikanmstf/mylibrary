import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';

export function ResolvedGetAllTags(response) {
  return {
    type: 'RESOLVED_GET_ALL_TAGS',
    data: response.data.response
  };
}

export function getAllTags(search) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getAllTags, {
				params: {
					title: search.title,
					login_key: Storage.get('login_key'),
          page: search.pageNo
				}
			})
		.then((response) => dispatch(ResolvedGetAllTags(response)));
	};
}
