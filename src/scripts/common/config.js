const home = "http://localhost/mylibrary/api";
const publications = "/publications";
const membership = "/membership";
const lists = "/lists";
const writers = "/writers";

export const API = {

  getAllPublications: home + publications + "/get_all",
  getPublicationDetails: home + publications + "/get_one",
  getLogin: home + membership + "/get_login",
  getListsOfPublication: home + lists + publications + "/get_all",
  getListById: home + lists  + "/get_one",
  getWriterDetails: home + writers  + "/get_one"
}
