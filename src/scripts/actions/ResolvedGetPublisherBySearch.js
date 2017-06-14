import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedGetPublisherBySearch(response) {
  return {
    type: 'RESOLVED_GET_PUBLISHER_BY_SEARCH',
    data: response.data.response
  };
}

export function getPublisherBySearch(title) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getPublisherBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetPublisherBySearch(response)));
	};
}

export function ResolvedResetGetPublisherBySearch() {
  return {
    type: 'RESET_GET_PUBLISHER_BY_SEARCH',
    data: []
  };
}

export function resetGetPublisherBySearch() {
	return function (dispatch) {
		dispatch(ResolvedResetGetPublisherBySearch());
	};
}
