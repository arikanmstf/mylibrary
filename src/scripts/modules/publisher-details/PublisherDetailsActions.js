import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'modules/common/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetPublisherDetails(response) {
  return {
    type: 'RESOLVED_GET_PUBLISHER_DETAILS',
    data: response.data.response
  };
}

export function getPublisherDetails(publisherId) {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getPublisherDetails, {
				params: {
					publisher_id: publisherId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetPublisherDetails(response)))
    .catch((msg) => {
        const message = createErrorMessage(msg);
        dispatch(openModal(message));
    });
	};
}
