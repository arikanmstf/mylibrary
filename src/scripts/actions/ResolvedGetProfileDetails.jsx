import axios from 'axios';
import Storage from '../common/Storage';
import { API } from '../common/Config';
import StartedRequest from './StartedRequest';

export function ResolvedGetProfileDetails(response) {
  return {
    type: 'RESOLVED_GET_PROFILE_DETAILS',
    data: response.data.response
  };
}

export function getProfileDetails() {
	return function (dispatch) {
    dispatch(StartedRequest());
		axios.get(API.getProfileDetails, {
				params: {
					login_key: Storage.get('login_key')
				}
			})
		.then((response) => dispatch(ResolvedGetProfileDetails(response)));
	};
}
