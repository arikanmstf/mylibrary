// @flow

export type Writer = {|
  id: number,
  name: string,
|}

export type Publisher = {|
  id: number,
  name: string,
|}

export type Item = {|
  type: 'TAG' | 'LIST',
  name: string,
  id: number,
  orderNo?: number,
  code?: string,
|}

export type PublicationDetail = {|
  title: string,
  id: number,
  bookId: number,
  downloadUrl: string,
  writers: Array<Writer>,
  lists: Array<Item>,
  tags: Array<Item>,
  description: string,
  pageNumber: number,
  coverNo: number,
  addedBy: string,
  publisher: Publisher
|}
