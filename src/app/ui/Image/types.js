// @flow
export type ImageProps = {
  source: {
    uri?: string,
  } | string,
  alt?: ?string,
  to?: string,
  onLoad?: Function,
  onError?: Function,
};
