import { createAction } from 'redux-actions';
import { CENTER_LOADER_SHOW, CENTER_LOADER_HIDE } from 'constants/actions/actionNames';

export const showCenterLoader = createAction(CENTER_LOADER_SHOW);
export const hideCenterLoader = createAction(CENTER_LOADER_HIDE);

export const mapStateToProps = (state) => ({
  isVisible: state.toJS().centerLoader.isVisible,
});
