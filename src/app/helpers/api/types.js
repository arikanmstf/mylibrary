// @flow

export type WriterDetail = {|
  id: number,
  name: string,
  description: string,
|}

export type PublisherDetail = {|
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
  writers: Array<WriterDetail>,
  lists: Array<Item>,
  tags: Array<Item>,
  description: string,
  pageNumber: number,
  coverNo: number,
  addedBy: string,
  publisher: PublisherDetail
|}

export type ToggleFavorite = {|
  id: number,
  result: 1 | 0,
|}

export type ToggleRead = {|
  id: number,
  result: 1 | 0,
|}

export type BookDetail = {|
  title: string,
  id: number,
  description: string,
  writers: Array<WriterDetail>,
  publishers: Array<PublisherDetail>,
  tags: Array<Item>,
  addedBy: string,
|}
