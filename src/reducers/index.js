import { combineReducers } from 'redux';
import BooksReducer from './reducer_publications';

const rootReducer = combineReducers({
	books: BooksReducer
});

export default rootReducer;
