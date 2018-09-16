// @flow

export type GetPublicationDetailRequest = {
  id: number,
}

export type ToggleListRequest = {
  addToListId: number,
  listId: number,
  orderNo?: number,
}
