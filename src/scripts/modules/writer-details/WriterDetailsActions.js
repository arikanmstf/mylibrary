import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'modules/common/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetWriterDetails(response) {
  return {
    type: 'RESOLVED_GET_WRITER_DETAILS',
    data: response.data.response
  };
}

export function getWriterDetails(writerId) {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getWriterDetails, {
				params: {
					writer_id: writerId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetWriterDetails(response)))
    .catch((msg) => {
        const message = createErrorMessage(msg);
        dispatch(openModal(message));
    });
	};
}
