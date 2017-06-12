const home = 'http://mustafaarikan.net/mylibapi';
const publications = '/publications';
const membership = '/membership';
const lists = '/lists';
const writers = '/writers';
const books = '/books';
const tags = '/tags';
const publishers = '/publishers';
const users = '/users';

export const API = {

  getAllPublications: home + publications + '/get_all',
  getPublicationDetails: home + publications + '/get_one',
  updatePublicationDetails: home + publications + '/update',

  getLogin: home + membership + '/get_login',

  getAllWriters: home + writers + '/get_all',
  getWriterDetails: home + writers + '/get_one',
  getWriterBySearch: home + writers + '/get_search',

  getAllBooks: home + books + '/get_all',
  getBookDetails: home + books + '/get_one',
  getBookBySearch: home + books + '/get_search',

  getListDetails: home + lists + '/get_one',
  getListBySearch: home + lists + '/get_search',

  getTagDetails: home + tags + '/get_one',
  getTagBySearch: home + tags + '/get_search',

  getAllPublishers: home + publishers + '/get_all',
  getPublisherDetails: home + publishers + '/get_one',
  getPublisherBySearch: home + publishers + '/get_search',

  getAllUsers: home + users + '/get_all'
};

export const PAGINATION = {
  recordsPerPage: 36
};
