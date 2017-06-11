import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';

export function ResolvedUpdatePublicationDetails(response) {
  return {
    type: 'RESOLVED_UPDATE_PUBLICATION_DETAILS',
    data: response.data.response
  };
}

export function updatePublicationDetails(form) {
	return function (dispatch) {
		axios.get(API.updatePublicationDetails, {
				params: {
					...form,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedUpdatePublicationDetails(response)));
	};
}
