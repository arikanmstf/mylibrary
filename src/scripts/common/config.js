const home = "http://mustafaarikan.net/mylibapi";
const publications = "/publications";
const membership = "/membership";
const lists = "/lists";
const writers = "/writers";
const books = "/books";

export const API = {

  getAllPublications: home + publications + "/get_all",
  getPublicationDetails: home + publications + "/get_one",
  getLogin: home + membership + "/get_login",
  getListById: home + lists  + "/get_one",
  getWriterDetails: home + writers  + "/get_one",
  getBookDetails: home + books  + "/get_one"
}
