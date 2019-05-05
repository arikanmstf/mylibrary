/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import type { ImmutableState } from 'store/StateTypes';
import { fetchPublication, updatePublication } from 'modules/publication/actions';
import { updateRows } from 'modules/row/actions';
import { fetchLists } from 'modules/list/actions';
import { SEARCH_LIST_FORM_KEY } from 'constants/forms/searchList';
import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { ThunkAction } from 'redux-thunk';
import type { SubmitSearchListFormRequest } from './PublicationAddToListTypes';

export const submitSearchForm = async (form: Immutable<SubmitSearchListFormRequest>, dispatch: Dispatch<*>) => {
  const { search } = form.toJS();
  dispatch(fetchLists({ search }));
};

export const formConfig = {
  form: SEARCH_LIST_FORM_KEY,
  onSubmit: submitSearchForm,
};

export const mapStateToProps = (state: ImmutableState) => ({
  rows: state.toJS().row.rows,
  publication: state.toJS().publication.publication,
});

export const resetRows = (): ThunkAction => {
  return (dispatch: Dispatch<*>) => {
    dispatch(updateRows([]));
  };
};

export const getPublication = (publicationId: number): ThunkAction => {
  return (dispatch: Dispatch<*>, getState: Function) => {
    const state: ImmutableState = getState();
    const { cards } = state.toJS().card;

    const foundPublication = (cards || []).find((p) => p.id === publicationId);
    if (!foundPublication) {
      dispatch(fetchPublication(publicationId));
    } else {
      dispatch(updatePublication(foundPublication));
    }
  };
};

export const mapDispatchToProps = {
  fetchPublication: getPublication,
  resetRows,
};
