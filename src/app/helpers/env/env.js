// @flow

export const isDevelopment = (): boolean => typeof IS_DEVELOPMENT !== 'undefined' && IS_DEVELOPMENT;

export const isLocal = (): boolean => typeof IS_LOCAL !== 'undefined' && IS_LOCAL;

export const getEnv = (): ?string => (typeof ENVIRONMENT !== 'undefined' ? ENVIRONMENT : null);
