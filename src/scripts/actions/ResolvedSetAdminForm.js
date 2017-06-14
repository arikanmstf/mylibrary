import axios from 'axios';
import qs from 'qs';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedUpdatePublicationDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_PUBLICATION_DETAILS',
    data: response.data.response
  };
}
export function ResolvedUpdateBookDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_BOOK_DETAILS',
    data: response.data.response
  };
}
export function ResolvedUpdateWriterDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_WRITER_DETAILS',
    data: response.data.response
  };
}
export function ResolvedUpdatePublisherDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_PUBLISHER_DETAILS',
    data: response.data.response
  };
}
export function ResolvedUpdateUserDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_USER_DETAILS',
    data: response.data.response
  };
}
export function ResolvedUpdateTagDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_TAG_DETAILS',
    data: response.data.response
  };
}
export function ResolvedUpdateListDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_LIST_DETAILS',
    data: response.data.response
  };
}

export function updatePublicationDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.updatePublicationDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdatePublicationDetails(response)));
	};
}
export function updateBookDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.updateBookDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdateBookDetails(response)));
	};
}
export function updateWriterDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.updateWriterDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdateWriterDetails(response)));
	};
}
export function updatePublisherDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.updatePublisherDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdatePublisherDetails(response)));
	};
}
export function updateUserDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.updateUserDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdateUserDetails(response)));
	};
}
export function updateTagDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.updateTagDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdateTagDetails(response)));
	};
}
export function updateListDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.updateListDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdateListDetails(response)));
	};
}

export function ResolvedAddBookDetails(response) {
  return {
    type: 'RESOLVED_ADD_BOOK_DETAILS',
    data: response.data.response
  };
}
export function ResolvedAddPublicationDetails(response) {
  return {
    type: 'RESOLVED_ADD_PUBLICATION_DETAILS',
    data: response.data.response
  };
}
export function ResolvedAddWriterDetails(response) {
  return {
    type: 'RESOLVED_ADD_WRITER_DETAILS',
    data: response.data.response
  };
}
export function ResolvedAddPublisherDetails(response) {
  return {
    type: 'RESOLVED_ADD_PUBLISHER_DETAILS',
    data: response.data.response
  };
}
export function ResolvedAddUserDetails(response) {
  return {
    type: 'RESOLVED_ADD_USER_DETAILS',
    data: response.data.response
  };
}

export function addBookDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.addBookDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedAddBookDetails(response)));
	};
}
export function addPublicationDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.addPublicationDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedAddPublicationDetails(response)));
	};
}
export function addWriterDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.addWriterDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedAddWriterDetails(response)));
	};
}
export function addPublisherDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.addPublisherDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedAddPublisherDetails(response)));
	};
}
export function addUserDetails(form) {
	return function (dispatch) {
    dispatch(StartedRequest());
    axios.post(API.addUserDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedAddUserDetails(response)));
	};
}
