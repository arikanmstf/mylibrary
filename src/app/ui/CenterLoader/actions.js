import { createAction } from 'redux-actions';
import { SHOW_CENTER_LOADER, HIDE_CENTER_LOADER } from 'constants/actions/actionNames';

export const showCenterLoader = createAction(SHOW_CENTER_LOADER);
export const hideCenterLoader = createAction(HIDE_CENTER_LOADER);

export const mapStateToProps = (state) => ({
  isVisible: state.toJS().centerLoader.isVisible,
});
