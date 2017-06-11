const home = 'http://mustafaarikan.net/mylibapi';
const publications = '/publications';
const membership = '/membership';
const lists = '/lists';
const writers = '/writers';
const books = '/books';
const tags = '/tags';
const publishers = '/publishers';

export const API = { // eslint-disable-line import/prefer-default-export

  getAllPublications: home + publications + '/get_all',
  getPublicationDetails: home + publications + '/get_one',
  updatePublicationDetails: home + publications + '/update',
  getLogin: home + membership + '/get_login',
  getWriterDetails: home + writers + '/get_one',
  getWriterBySearch: home + writers + '/get_search',
  getBookDetails: home + books + '/get_one',
  getListDetails: home + lists + '/get_one',
  getListBySearch: home + lists + '/get_search',
  getTagDetails: home + tags + '/get_one',
  getPublisherDetails: home + publishers + '/get_one'
};

export const PAGINATION = {
  recordsPerPage: 36
};
