const home = "http://localhost/mylibrary-api";
const publications = "/publications";
const membership = "/membership";

export const API = {

  getAllPublications: home + publications + "/get_all",
  getLogin: home + membership + "/get_login"
}
