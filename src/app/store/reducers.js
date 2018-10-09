import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable';

import book from 'modules/book/reducer';
import card from 'modules/card/reducer';
import publication from 'modules/publication/reducer';
import row from 'modules/row/reducer';
import writer from 'modules/writer/reducer';
import publisher from 'modules/publisher/reducer';

import loader from 'ui/ModalLoader/reducer';
import centerLoader from 'ui/CenterLoader/reducer';
import screen from 'ui/Screen/reducer';
import error from 'ui/GeneralError/reducer';

import login from 'screens/login/loginReducer';

const rootReducer = combineReducers({
  form,
  book,
  card,
  centerLoader,
  error,
  publication,
  publisher,
  row,
  loader,
  login,
  screen,
  writer,
});

export default rootReducer;
