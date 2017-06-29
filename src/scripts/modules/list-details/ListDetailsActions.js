import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';

export function ResolvedGetListDetails(response) {
  return {
    type: 'RESOLVED_GET_LIST_DETAILS',
    data: response.data.response
  };
}

export function getListDetails(listId) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getListDetails, {
				params: {
					list_id: listId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetListDetails(response)));
	};
}

export function ResolvedGetListBySearch(response) {
  return {
    type: 'RESOLVED_GET_LIST_BY_SEARCH',
    data: response.data.response
  };
}

export function getListBySearch(title) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getListBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetListBySearch(response)));
	};
}

export function ResolvedResetGetListBySearch() {
  return {
    type: 'RESET_GET_LIST_BY_SEARCH',
    data: []
  };
}

export function resetGetListBySearch() {
	return function (dispatch) {
		dispatch(ResolvedResetGetListBySearch());
	};
}
