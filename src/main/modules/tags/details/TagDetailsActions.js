import axios from 'axios';
import qs from 'qs';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openConfirmModal, openModal } from 'common/layout/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export const ResolvedGetTagDetails = (response) => {
  return {
    type: 'RESOLVED_GET_TAG_DETAILS',
    data: response.data.response
  };
};
export const getTagDetails = (tagId) => {
  return (dispatch) => {
    dispatch(StartedRequest());
    axios.get(API.getTagDetails, {
      params: {
        tag_id: tagId,
        login_key: Storage.get('login_key')
      }
    })
    .then((response) => dispatch(ResolvedGetTagDetails(response)))
    .catch((msg) => {
      const message = createErrorMessage(msg);
      dispatch(openModal(message));
    });
  };
};

const addTagBySearch = (title) => {
  axios.post(API.addTagDetails, qs.stringify({
    title,
    login_key: Storage.get('login_key')
  }))
  .catch((msg) => {
    const message = createErrorMessage(msg);
    dispatch(openModal(message));
  });
};
export const ResolvedGetTagBySearch = (response) => {
  return {
    type: 'RESOLVED_GET_TAG_BY_SEARCH',
    data: response.data.response
  };
};
export const getTagBySearch = (title) => {
  return (dispatch) => {
    dispatch(StartedRequest());
    axios.get(API.getTagBySearch, {
      params: {
        title,
        login_key: Storage.get('login_key')
      }
    })
    .then((response) => {
      if (response.data.response.length < 1) {
        dispatch(openConfirmModal({
          message: 'Tag not found, add new one ?',
          onConfirm: () => {
            addTagBySearch(title);
          }
        }));
      } else {
        dispatch(ResolvedGetTagBySearch(response));
      }
    })
    .catch((msg) => {
      const message = createErrorMessage(msg);
      dispatch(openModal(message));
    });
  };
};

export const ResolvedResetGetTagBySearch = () => {
  return {
    type: 'RESET_GET_TAG_BY_SEARCH',
    data: []
  };
};
export const resetGetTagBySearch = () => {
  return (dispatch) => {
    dispatch(ResolvedResetGetTagBySearch());
  };
};
