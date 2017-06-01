import axios from 'axios';

export function getAllPublications() {
	return function (dispatch) {
		axios.get("http://localhost/MyLibraryV2_Services/publications/get_all")
		.then(response => dispatch(resolvedGetAllPublications(response)))
	};
}

export function resolvedGetAllPublications(response) {
  return {
    type: "RESOLVED_GET_ALL_PUBLICATIONS",
    data: response.data.response
  }
}
