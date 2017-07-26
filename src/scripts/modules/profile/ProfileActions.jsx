import axios from 'axios';
import qs from 'qs';

import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'modules/common/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetProfileDetails(response) {
  return {
    type: 'RESOLVED_GET_PROFILE_DETAILS',
    data: response.data.response
  };
}

export function getProfileDetails() {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getProfileDetails, {
				params: {
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetProfileDetails(response)))
    .catch((msg) => {
        const message = createErrorMessage(msg);
        dispatch(openModal(message));
    });
	};
}

export function ResolvedUpdateProfileDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_PROFILE_DETAILS',
    data: response.data.response
  };
}

export function updateProfileDetails(form) {
	return (dispatch) => {
    dispatch(StartedRequest());
    axios.post(API.updateProfileDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdateProfileDetails(response)))
    .catch((msg) => {
        const message = createErrorMessage(msg);
        dispatch(openModal(message));
    });
	};
}
