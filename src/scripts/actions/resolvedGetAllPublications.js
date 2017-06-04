import axios from "axios";
import { API } from "../common/config";
import storage from "../common/storage";

let s = new storage();
export function getAllPublications(search) {
	return function (dispatch) {
		axios.get(API.getAllPublications,{
				params: {
					title: search.title,
					login_key: s.get("login_key")
				}
			})
		.then(response => dispatch(resolvedGetAllPublications(response)))
	};
}

export function resolvedGetAllPublications(response) {
  return {
    type: "RESOLVED_GET_ALL_PUBLICATIONS",
    data: response.data.response
  }
}
