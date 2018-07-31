// @flow

export const isWeb = (): boolean => {
  return typeof document !== 'undefined';
};

export const isIOS = (): boolean => {
  return typeof document === 'undefined';
};

export const isAND = (): boolean => {
  return false; // TODO
};
