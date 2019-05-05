// @flow

export type HeaderSearchProps = {};

export type SubmitSearchFormRequest = {
  page?: number,
  search?: string,
  type?: 'BOOKS_I_READ' | 'MY_FAVORITES' | '',
};

export type HeaderSearchState = {
  isSearchFocus: boolean,
}
