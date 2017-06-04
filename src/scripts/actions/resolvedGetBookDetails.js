import axios from "axios";
import { API } from "../common/config";
import storage from "../common/storage";

let s = new storage();
export function getBookDetails (book_id) {
	return function (dispatch) {
		axios.get(API.getBookDetails,{
				params: {
					book_id: book_id,
					login_key: s.get("login_key")
				}
			})
		.then(response => dispatch(resolvedGetBookDetails(response)))
	};
}

export function resolvedGetBookDetails(response) {
  return {
    type: "RESOLVED_GET_BOOK_DETAILS",
    data: response.data.response
  }
}
