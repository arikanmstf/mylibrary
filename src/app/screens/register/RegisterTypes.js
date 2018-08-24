/**
 * Screen Types Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import type { TextProps } from 'ui/Text/types';
import type { ScreenProps } from 'ui/Screen/types';

export type RegisterProps = {
  Text: React.ComponentType<TextProps>,
  Screen: React.ComponentType<ScreenProps>,
};

export type submitRegisterFormRequest = {
  name: string,
  displayName: string,
  email: string,
  password: string,
  passwordRepeat: string,
};

export type submitRegisterFormResponse = {
  success: {
    token: string,
    user: {
      name: string,
      permissions: Array<string>,
    },
  }
};

