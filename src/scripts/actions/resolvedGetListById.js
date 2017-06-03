import axios from "axios";
import { API } from "../common/config";

export function getListById(list_id) {
	return function (dispatch) {
		axios.get(API.getListById,{
				params: {
					list_id: list_id
				}
			})
		.then(response => dispatch(resolvedGetListById(response)))
	};
}

export function resolvedGetListById(response) {
  return {
    type: "RESOLVED_GET_LIST_BY_ID",
    data: response.data.response
  }
}
