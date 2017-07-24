import axios from 'axios';
import qs from 'qs';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openConfirmModal } from 'modules/common/modal/ModalActions';

export const ResolvedGetAllBooks = (response) => {
  return {
    type: 'RESOLVED_GET_ALL_BOOKS',
    data: response.data.response
  };
};
export const getAllBooks = (search) => {
	return (dispatch) => {
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
};

const addWriterBySearch = (title) => {
  axios.post(API.addWriterDetails, qs.stringify({
    title,
    login_key: Storage.get('login_key')
  }));
};
export const ResolvedGetWriterBySearch = (response) => {
  return {
    type: 'RESOLVED_GET_WRITER_BY_SEARCH',
    data: response.data.response
  };
};
export const getWriterBySearch = (title) => {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getWriterBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => {
      if (response.data.response.length < 1) {
        dispatch(openConfirmModal({
          message: 'Writer not found, add new one ?',
          onConfirm: () => {
            addWriterBySearch(title);
          }
        }));
      } else {
        dispatch(ResolvedGetWriterBySearch(response));
      }
    });
	};
};

export const ResolvedResetGetWriterBySearch = () => {
  return {
    type: 'RESET_GET_WRITER_BY_SEARCH',
    data: []
  };
};
export const resetGetWriterBySearch = () => {
	return (dispatch) => {
		dispatch(ResolvedResetGetWriterBySearch());
	};
};

export const ResolvedGetBookBySearch = (response) => {
  return {
    type: 'RESOLVED_GET_BOOK_BY_SEARCH',
    data: response.data.response
  };
};
export const getBookBySearch = (title) => {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getBookBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetBookBySearch(response)));
	};
};

export const ResolvedResetGetBookBySearch = () => {
  return {
    type: 'RESET_GET_BOOK_BY_SEARCH',
    data: []
  };
};
export const resetGetBookBySearch = () => {
	return (dispatch) => {
		dispatch(ResolvedResetGetBookBySearch());
	};
};

const addPublisherBySearch = (title) => {
  axios.post(API.addPublisherDetails, qs.stringify({
    title,
    login_key: Storage.get('login_key')
  }));
};
export const ResolvedGetPublisherBySearch = (response) => {
  return {
    type: 'RESOLVED_GET_PUBLISHER_BY_SEARCH',
    data: response.data.response
  };
};
export const getPublisherBySearch = (title) => {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getPublisherBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => {
      if (response.data.response.length < 1) {
        dispatch(openConfirmModal({
          message: 'Publisher not found, add new one ?',
          onConfirm: () => {
            addPublisherBySearch(title);
          }
        }));
      } else {
        dispatch(ResolvedGetPublisherBySearch(response));
      }
    });
	};
};

export const ResolvedResetGetPublisherBySearch = () => {
  return {
    type: 'RESET_GET_PUBLISHER_BY_SEARCH',
    data: []
  };
};
export const resetGetPublisherBySearch = () => {
	return (dispatch) => {
		dispatch(ResolvedResetGetPublisherBySearch());
	};
};
