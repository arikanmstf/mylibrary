import axios from "axios";
import qs from "qs";
import { API } from "../common/config";

export function getLogin(data) {
	return function (dispatch) {
		axios.post(API.getLogin,qs.stringify({
			username: data.username,
			password: data.password
		}))
		.then(response => dispatch(resolvedGetLogin(response)))
	};
}

export function resolvedGetLogin(response) {
  return {
    type: "RESOLVED_GET_LOGIN",
    data: response.data.response
  }
}
