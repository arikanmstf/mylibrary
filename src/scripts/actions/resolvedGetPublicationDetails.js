import axios from "axios";
import { API } from "../common/config";
import storage from "../common/storage";

let s = new storage();
export function getPublicationDetails(publication_id) {
	return function (dispatch) {
		axios.get(API.getPublicationDetails,{
				params: {
					publication_id: publication_id,
					login_key: s.get("login_key")
				}
			})
		.then(response => dispatch(resolvedGetPublicationDetails(response)))
	};
}

export function resolvedGetPublicationDetails(response) {
  return {
    type: "RESOLVED_GET_PUBLICATION_DETAILS",
    data: response.data.response
  }
}
