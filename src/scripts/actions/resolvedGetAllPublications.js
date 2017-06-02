import axios from "axios";
import { API } from "../config/api";

export function getAllPublications() {
	return function (dispatch) {
		axios.get(API.getAllPublications)
		.then(response => dispatch(resolvedGetAllPublications(response)))
	};
}

export function resolvedGetAllPublications(response) {
  return {
    type: "RESOLVED_GET_ALL_PUBLICATIONS",
    data: response.data.response
  }
}
