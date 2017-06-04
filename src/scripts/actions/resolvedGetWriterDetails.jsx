import axios from "axios";
import { API } from "../common/config";
import storage from "../common/storage";

let s = new storage();
export function getWriterDetails(writer_id) {
	return function (dispatch) {
		axios.get(API.getWriterDetails,{
				params: {
					writer_id: writer_id,
					login_key: s.get("login_key")
				}
			})
		.then(response => dispatch(resolvedGetWriterDetails(response)))
	};
}

export function resolvedGetWriterDetails(response) {
  return {
    type: "RESOLVED_GET_WRITER_DETAILS",
    data: response.data.response
  }
}
