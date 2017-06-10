const home = 'http://mustafaarikan.net/mylibapi';
const publications = '/publications';
const membership = '/membership';
const lists = '/lists';
const writers = '/writers';
const books = '/books';

export const API = { // eslint-disable-line import/prefer-default-export

  getAllPublications: home + publications + '/get_all',
  getPublicationDetails: home + publications + '/get_one',
  getLogin: home + membership + '/get_login',
  getWriterDetails: home + writers + '/get_one',
  getBookDetails: home + books + '/get_one',
  getListDetails: home + lists + '/get_one'
};

export const PAGINATION = {
  recordsPerPage: 36
};
