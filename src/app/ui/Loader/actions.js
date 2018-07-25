import { createAction } from 'redux-actions';
import { SHOW_LOADER, HIDE_LOADER } from 'constants/actions/actionNames';

export const showLoader = createAction(SHOW_LOADER);
export const hideLoader = createAction(HIDE_LOADER);

export const mapStateToProps = (store) => ({
  isVisible: store.toJS().loader.isVisible,
});