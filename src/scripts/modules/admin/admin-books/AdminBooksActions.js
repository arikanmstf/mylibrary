import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';

export function ResolvedGetAllBooks(response) {
  return {
    type: 'RESOLVED_GET_ALL_BOOKS',
    data: response.data.response
  };
}

export function getAllBooks(search) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getAllBooks, {
				params: {
					title: search.title,
					login_key: Storage.get('login_key'),
          page: search.pageNo
				}
			})
		.then((response) => dispatch(ResolvedGetAllBooks(response)));
	};
}

export function ResolvedGetWriterBySearch(response) {
  return {
    type: 'RESOLVED_GET_WRITER_BY_SEARCH',
    data: response.data.response
  };
}

export function getWriterBySearch(title) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getWriterBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetWriterBySearch(response)));
	};
}

export function ResolvedResetGetWriterBySearch() {
  return {
    type: 'RESET_GET_WRITER_BY_SEARCH',
    data: []
  };
}

export function resetGetWriterBySearch() {
	return function (dispatch) {
		dispatch(ResolvedResetGetWriterBySearch());
	};
}

export function ResolvedGetBookBySearch(response) {
  return {
    type: 'RESOLVED_GET_BOOK_BY_SEARCH',
    data: response.data.response
  };
}

export function getBookBySearch(title) {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getBookBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetBookBySearch(response)));
	};
}

export function ResolvedResetGetBookBySearch() {
  return {
    type: 'RESET_GET_BOOK_BY_SEARCH',
    data: []
  };
}

export function resetGetBookBySearch() {
	return function (dispatch) {
		dispatch(ResolvedResetGetBookBySearch());
	};
}

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
