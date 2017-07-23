import axios from 'axios';
import Storage from 'common/Storage';
import { API } from 'common/Config';
import StartedRequest from 'common/actions/StartedRequest';
import { openModal } from 'modules/common/modal/ModalActions';
import { createErrorMessage } from 'common/Helpers';

export function ResolvedGetAllPublications(response) {
  return {
    type: 'RESOLVED_GET_ALL_PUBLICATIONS',
    data: response.data.response
  };
}

export function getAllPublications(search) {
	return (dispatch) => {
    dispatch(StartedRequest());
		axios.get(API.getAllPublications, {
				params: {
					title: search.title,
					login_key: Storage.get('login_key'),
          page: search.pageNo
				}
			})
		.then((response) => dispatch(ResolvedGetAllPublications(response)))
    .catch((msg) => {
        const message = createErrorMessage(msg);
        dispatch(openModal(message));
    });
	};
}
