import axios from "axios";
import qs from "qs";
import storage from "../common/storage";
import { API } from "../common/config";

let s = new storage();
export function getLogin(data) {
	return function (dispatch) {
		axios.post(API.getLogin,qs.stringify({
			username: data.username,
			password: data.password
		}))
		.then(response => s.set("login_key",response.data.response))
	};
}

export function resolvedGetLogin(response) {
  return {
    type: "RESOLVED_GET_LOGIN",
    data: response.data.response
  }
}
