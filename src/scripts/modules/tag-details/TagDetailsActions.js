import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';

export function ResolvedGetTagDetails(response) {
  return {
    type: 'RESOLVED_GET_TAG_DETAILS',
    data: response.data.response
  };
}

export function getTagDetails(tagId) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getTagDetails, {
				params: {
					tag_id: tagId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetTagDetails(response)));
	};
}

export function ResolvedGetTagBySearch(response) {
  return {
    type: 'RESOLVED_GET_TAG_BY_SEARCH',
    data: response.data.response
  };
}

export function getTagBySearch(title) {
	return function (dispatch) {
    dispatch(StartedRequest());
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
