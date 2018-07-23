// @flow
export type Immutable<V> = {
  toJS: () => V,
};
