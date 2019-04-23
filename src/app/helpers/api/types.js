// @flow

export type PublisherDetail = {|
  id: number,
  name: string,
|}

export type Item = {|
  type: 'TAG' | 'LIST' | 'SUB_ITEM_TYPE_PUBLICATION' | 'SUB_ITEM_TYPE_BOOK',
  name: string,
  id: number,
  orderNo?: number,
  code?: string,
  subItems: Array<Item>,
|}

export type WriterDetail = {|
  id: number,
  name: string,
  description: string,
  books: Array<Item>,
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
  publisher: PublisherDetail,
  isbn: string,
|}

export type BookDetail = {|
  title: string,
  id: number,
  description: string,
  writers: Array<WriterDetail>,
  publishers: Array<PublisherDetail>,
  tags: Array<Item>,
  publications: Array<Item>,
  addedBy: string,
|}
