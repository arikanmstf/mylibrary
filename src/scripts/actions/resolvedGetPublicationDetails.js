import axios from "axios";
import { API } from "../common/config";

export function getPublicationDetails(publication_id) {
	return function (dispatch) {
		axios.get(API.getPublicationDetails,{
				params: {
					publication_id: publication_id
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
