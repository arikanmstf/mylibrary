import axios from 'axios';
import qs from 'qs';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openConfirmModal } from 'modules/common/modal/ModalActions';

export const ResolvedGetListDetails = (response) => {
  return {
    type: 'RESOLVED_GET_LIST_DETAILS',
    data: response.data.response
  };
};
export const getListDetails = (listId) => {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getListDetails, {
				params: {
					list_id: listId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetListDetails(response)));
	};
};

const addListBySearch = (title) => {
  axios.post(API.addListDetails, qs.stringify({
    title,
    login_key: Storage.get('login_key')
  }));
};
export const ResolvedGetListBySearch = (response) => {
  return {
    type: 'RESOLVED_GET_LIST_BY_SEARCH',
    data: response.data.response
  };
};
export const getListBySearch = (title) => {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getListBySearch, {
				params: {
					title,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => {
      if (response.data.response.length < 1) {
        dispatch(openConfirmModal({
          message: 'List not found, add new one ?',
          onConfirm: () => {
            addListBySearch(title);
          }
        }));
      } else {
        dispatch(ResolvedGetListBySearch(response));
      }
    });
	};
};

export const ResolvedResetGetListBySearch = () => {
  return {
    type: 'RESET_GET_LIST_BY_SEARCH',
    data: []
  };
};
export const resetGetListBySearch = () => {
	return (dispatch) => {
		dispatch(ResolvedResetGetListBySearch());
	};
};
