// @flow

export type CardItem = {|
  title: string,
  id: number,
  subHeader?: ?string,
  isFavorite: ?boolean,
  isRead: ?boolean,
  type: string,
  description?: string,
  image?: string,
  downloadUrl?: string,
|}
