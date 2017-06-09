import axios from 'axios';
import Storage from '../common/storage';
import { API } from '../common/config';

export function resolvedGetPublicationDetails(response) {
  return {
    type: 'RESOLVED_GET_PUBLICATION_DETAILS',
    data: response.data.response
  };
}

export function getPublicationDetails(publicationId) {
	return function () {
		axios.get(API.getPublicationDetails, {
				params: {
					publication_id: publicationId,
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(resolvedGetPublicationDetails(response)));
	};
}
