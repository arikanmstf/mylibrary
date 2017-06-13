import axios from 'axios';
import qs from 'qs';
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
    axios.post(API.updatePublicationDetails, qs.stringify({
      ...form,
      login_key: Storage.get('login_key')
    }))
		.then((response) => dispatch(ResolvedUpdatePublicationDetails(response)));
	};
}
