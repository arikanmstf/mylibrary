// @flow

declare var ENVIRONMENT: string;
declare var IS_DEVELOPMENT: boolean;

export const isDevelopment = (): boolean => (typeof IS_DEVELOPMENT !== 'undefined' && !!IS_DEVELOPMENT)
  || (typeof process.env.REACT_NATIVE_IS_DEVELOPMENT !== 'undefined' && !!process.env.REACT_NATIVE_IS_DEVELOPMENT);

export const getEnv = (): ?string => (typeof ENVIRONMENT !== 'undefined' ? ENVIRONMENT : null)
  || (process.env.REACT_NATIVE_ENVIRONMENT !== 'undefined' ? process.env.REACT_NATIVE_ENVIRONMENT : null);
