// @flow

import type { Permission } from './types';

export const hasPermission = (code: string, permissions: Array<Permission>): boolean => {
  return !!(permissions.some((p) => p.code === code));
};
