import axios from "axios";
import { API } from "../config/api";

export function getLogin() {
	return function (dispatch) {
		axios.get(API.getLogin)
		.then(response => dispatch(resolvedGetLogin(response)))
	};
}

export function resolvedGetLogin(response) {
  return {
    type: "RESOLVED_GET_LOGIN",
    data: response.data.response
  }
}
