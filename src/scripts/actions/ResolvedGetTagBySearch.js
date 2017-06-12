import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';

export function ResolvedGetTagBySearch(response) {
  return {
    type: 'RESOLVED_GET_TAG_BY_SEARCH',
    data: response.data.response
  };
}

export function getTagBySearch(title) {
	return function (dispatch) {
		axios.get(API.getTagBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetTagBySearch(response)));
	};
}

export function ResolvedResetGetTagBySearch() {
  return {
    type: 'RESET_GET_TAG_BY_SEARCH',
    data: []
  };
}

export function resetGetTagBySearch() {
	return function (dispatch) {
		dispatch(ResolvedResetGetTagBySearch());
	};
}
