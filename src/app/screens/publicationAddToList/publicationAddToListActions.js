/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import type { ImmutableState } from 'store/StateTypes';
import { fetchPublication } from 'modules/publication/actions';
import { fetchLists } from 'modules/list/actions';
import { SEARCH_LIST_FORM_KEY } from 'constants/forms/searchList';
import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
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

export const mapDispatchToProps = {
  fetchPublication,
};
