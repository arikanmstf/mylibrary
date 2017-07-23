import config from 'config';

const home = config.middleWareUrl;
const publications = '/publications';
const membership = '/membership';
const lists = '/lists';
const writers = '/writers';
const books = '/books';
const tags = '/tags';
const publishers = '/publishers';
const users = '/users';
const upload = '/upload';
const download = '/download';

export const API = {

  getAllPublications: home + publications + '/get_all',
  getPublicationDetails: home + publications + '/get_one',
  updatePublicationDetails: home + publications + '/update',
  updatePublicationDetailsList: home + publications + '/update_list',
  addPublicationDetails: home + publications + '/add',

  getAllWriters: home + writers + '/get_all',
  getWriterDetails: home + writers + '/get_one',
  getWriterBySearch: home + writers + '/get_search',
  updateWriterDetails: home + writers + '/update',
  addWriterDetails: home + writers + '/add',

  getAllBooks: home + books + '/get_all',
  getBookDetails: home + books + '/get_one',
  getBookBySearch: home + books + '/get_search',
  updateBookDetails: home + books + '/update',
  addBookDetails: home + books + '/add',

  getAllLists: home + lists + '/get_all',
  getListDetails: home + lists + '/get_one',
  getListBySearch: home + lists + '/get_search',
  updateListDetails: home + lists + '/update',
  addListDetails: home + lists + '/add',

  getAllTags: home + tags + '/get_all',
  getTagDetails: home + tags + '/get_one',
  getTagBySearch: home + tags + '/get_search',
  updateTagDetails: home + tags + '/update',
  addTagDetails: home + tags + '/add',

  getAllPublishers: home + publishers + '/get_all',
  getPublisherDetails: home + publishers + '/get_one',
  getPublisherBySearch: home + publishers + '/get_search',
  updatePublisherDetails: home + publishers + '/update',
  addPublisherDetails: home + publishers + '/add',

  getAllUsers: home + users + '/get_all',
  getUserDetails: home + users + '/get_one',
  updateUserDetails: home + users + '/update',
  addUserDetails: home + users + '/add',

  getLogin: home + membership + '/get_login',
  getLogout: home + membership + '/get_logout',
  getProfileDetails: home + membership + '/profile',
  updateProfileDetails: home + membership + '/update',

  uploadFile: home + upload + '/file',
  uploadImage: home + upload + '/image',
  downloadFile: home + download + '/file'
};

export const PAGINATION = {
  recordsPerPage: 36
};
