import axios from "axios";
import { API } from "../common/config";

export function getListsOfPublication(publication_id) {
	return function (dispatch) {
		axios.get(API.getListsOfPublication,{
				params: {
					publication_id: publication_id
				}
			})
		.then(response => dispatch(resolvedGetListsOfPublication(response)))
	};
}

export function resolvedGetListsOfPublication(response) {
  return {
    type: "RESOLVED_GET_LISTS_OF_PUBLICATION",
    data: response.data.response
  }
}
